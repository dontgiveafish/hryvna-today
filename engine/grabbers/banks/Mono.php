<?php

namespace app\grabbers\banks;

use app\grabbers\ExchangeRateGrabberStrategyAbstract;
use app\grabbers\ExchangeRateGrabbingStrategyInterface;

use app\models\Currency;
use yii\helpers\ArrayHelper;

/**
 * This is class for grabbing bank
 */
class Mono extends ExchangeRateGrabberStrategyAbstract implements ExchangeRateGrabbingStrategyInterface
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

        $json = file_get_contents($url, false, stream_context_create([
            'ssl' => [
                'verify_peer' => false,
                'verify_peer_name' => false,
            ],
        ]));

        if (empty($json)) {
            throw new \LogicException('broken anwer:no data');
        }

        $data = json_decode($json, true) ?: [];

        $data = array_filter($data, function ($row) {
            $isCurrencyFromExists = !empty($row['currencyCodeA']);
            $isCurrencyToIsHryvna = !empty($row['currencyCodeB']) && $row['currencyCodeB'] == 980;
            $isSellAndBuy = !empty($row['rateBuy']) && !empty($row['rateSell']);

            return $isCurrencyFromExists && $isCurrencyToIsHryvna && $isSellAndBuy;
        });

        if (empty($data)) {
            throw new \LogicException('broken json: no data');
        }

        // prepare available currency codes
        $currencies = Currency::find()->all();
        $currencyIdToCode = ArrayHelper::map($currencies, 'id', 'code');

        // search for available currencies and save values
        $saved = 0;
        foreach ($data as $row) {
            if (empty($currencyIdToCode[$row['currencyCodeA']])) {
                continue;
            }

            $this->saveCurrencyValues(
                $row['currencyCodeA'],
                $row['rateBuy'],
                $row['rateSell'],
                $currencyIdToCode[$row['currencyCodeA']]
            );

            ++$saved;
        }

        if (empty($saved)) {
            throw new \LogicException('nothing to save from response');
        }

        return $this->returnValues();
    }
}
