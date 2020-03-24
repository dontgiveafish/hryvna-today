<?php

namespace app\grabbers\banks;

use app\grabbers\ExchangeRateGrabberStrategyAbstract;
use app\grabbers\ExchangeRateGrabbingStrategyInterface;

use app\models\Currency;
use yii\helpers\ArrayHelper;

/**
 * This is class for grabbing bank
 */
class Eximb extends ExchangeRateGrabberStrategyAbstract implements ExchangeRateGrabbingStrategyInterface
{
    /**
     * This method is adapted for Mono API
     *
     * {@inheritdoc}
     */
    public function execute()
    {
        $url = $this->getURL();
        if (empty($url)) {
            throw new \LogicException('broken class:no url');
        }

        // get and decode data
        $filename = strtr('{url}?{query}', [
            '{url}' => $url,
            '{query}' => http_build_query([
                'day' => date('d'),
                'month' => date('m'),
                'year' => date('Y'),
            ])
        ]);

        $json = file_get_contents($filename);

        if (empty($json)) {
            throw new \LogicException('broken anwer:no data');
        }

        $data = json_decode($json, true) ?: [];
        $data = $data['rates']['cash']['data'] ?: [];

        if (empty($data)) {
            throw new \LogicException('broken json: no data');
        }

        // prepare available currency codes
        $currencies = Currency::find()->all();
        $currencyCodeToId = ArrayHelper::map($currencies, 'code', 'id');

        // search for available currencies and save values
        foreach ($data as $row) {
            if (empty($currencyCodeToId[$row['code']])) {
                continue;
            }

            $this->saveCurrencyValues(
                $currencyCodeToId[$row['code']],
                $this->prepareValue($row['buy']),
                $this->prepareValue($row['sell']),
                $row['code']
            );
        }

        if (empty($this->exchanges)) {
            throw new \LogicException('nothing to save from response');
        }

        return $this->returnValues();
    }

    protected function prepareValue($text)
    {
        return str_replace(',', '.', $text);
    }
}
