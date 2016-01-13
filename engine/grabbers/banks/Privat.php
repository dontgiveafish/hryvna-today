<?php

namespace app\grabbers\banks;

use app\grabbers\ExchangeRateGrabberStrategyAbstract;
use app\grabbers\ExchangeRateGrabbingStrategyInterface;

use yii\helpers\ArrayHelper;

/**
 * This is class for grabbing non-common Privatbank API
 */
class Privat extends ExchangeRateGrabberStrategyAbstract implements ExchangeRateGrabbingStrategyInterface
{
    /**
     * This method is adapted for Privatbank API
     * 
     * {@inheritdoc}
     */
    public function execute()
    {
        $url = $this->getURL();

        if (empty($url)) {
            throw new \LogicException('broken class:no url');
        }
        
        $html = file_get_contents($url);

        if (empty($html)) {
            throw new \LogicException('broken anwer:no data');
        }

        $json = json_decode($html);

        if (empty($json)) {
            throw new \LogicException('broken json: no data');
        }

        // prepare available currency codes
        $currencies = $this->info->grabberStrategyCurrencies;

        if (!empty($currencies)) {

            $currency_codes = ArrayHelper::map($currencies, 'currency.code', 'currency.id');

            // this code is here because PrivatBank use RUR for RUB :-/
            foreach ($currencies as $currency) {
                if (!empty($currency->currency->grabberCurrencyCheckers)) {
                    foreach ($currency->currency->grabberCurrencyCheckers as $checker) {
                        $currency_codes[$checker->value] = $currency->currency->id;
                    }
                }
            }

            // search for available currencies and save values
            foreach ($json as $key => $data) {
                $currency_code = $data->ccy ?: null;

                if (!empty($currency_code) &&
                    !empty($currency_codes[$currency_code]) &&
                    $data->base_ccy == 'UAH'
                ) {
                    $this->saveCurrencyValues(
                        $currency_codes[$currency_code],
                        $data->buy,
                        $data->sale,
                        $currency_code
                    );
                }
            }

        }

        return $this->returnValues();
    }
}