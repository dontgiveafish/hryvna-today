<?php

namespace app\grabbers\banks;

use app\models\Currency;

use app\grabbers\ExchangeRateGrabberStrategyAbstract;
use app\grabbers\ExchangeRateGrabbingStrategyInterface;

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
            throw new \Exception('broken class:no url');
        }
        
        $html = file_get_contents($url);

        if (empty($html)) {
            throw new \Exception('broken markup:no data');
        }

        $json = json_decode($html);

        if (empty($json)) {
            throw new \Exception('broken json: no data');
        }

        // USD

        $buy = $this->grabJson($json, 2, 'buy');
        $sale = $this->grabJson($json, 2, 'sale');
        $check = $this->grabJson($json, 2, 'ccy');

        $this->saveCurrencyValues(Currency::DOLLAR_ID, $buy, $sale, $check);

        // EUR

        $buy = $this->grabJson($json, 1, 'buy');
        $sale = $this->grabJson($json, 1, 'sale');
        $check = $this->grabJson($json, 1, 'ccy');

        $this->saveCurrencyValues(Currency::EURO_ID, $buy, $sale, $check);
        
        return $this->exchanges;
    }

    /**
     * Get and filter JSON value
     * 
     * @param array $json_array
     * @param type $currency_id
     * @param type $key
     * @return type
     * @throws \Exception
     */
    private function grabJson(array $json_array, $currency_id, $key)
    {
        if (empty($json_array[$currency_id]->$key)) {
            throw new \Exception('broken json: missing value');
        }

        return $json_array[$currency_id]->$key;
    }
}