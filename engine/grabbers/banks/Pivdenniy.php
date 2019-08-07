<?php

namespace app\grabbers\banks;

use app\grabbers\ExchangeRateGrabberStrategyAbstract;
use app\grabbers\ExchangeRateGrabbingStrategyInterface;

use app\models\Currency;
use yii\helpers\ArrayHelper;

/**
 * This is class for grabbing bank
 */
class Pivdenniy extends ExchangeRateGrabberStrategyAbstract implements ExchangeRateGrabbingStrategyInterface
{
    /**
     * This method is adapted for Pivdenniy API
     *
     * {@inheritdoc}
     */
    public function execute()
    {
        $url = $this->getURL();

        if (empty($url)) {
            throw new \LogicException('broken class:no url');
        }

        // create url, get and decode data

        $query = ['date' => (new \DateTime())->setTime(0, 0)->getTimestamp()];
        $url .= '?' . http_build_query($query);

        $html = file_get_contents($url);

        if (empty($html)) {
            throw new \LogicException('broken anwer:no data');
        }

        $json = json_decode($html);

        if (empty($json)) {
            throw new \LogicException('broken json: no data');
        }

        // prepare available currency codes
        $currencies = Currency::find()->all();
        $currencyCodeToId = ArrayHelper::map($currencies, 'code', 'id');

        // search for available currencies and save values
        $saved = 0;
        foreach ($json as list(, $code, $buy, $sell)) {
            if (empty($currencyCodeToId[$code])) {
                continue;
            }

            $this->saveCurrencyValues(
                $currencyCodeToId[$code],
                $buy,
                $sell,
                $code
            );

            ++$saved;
        }

        if (empty($saved)) {
            throw new \LogicException('nothing to save from response');
        }

        return $this->returnValues();
    }
}