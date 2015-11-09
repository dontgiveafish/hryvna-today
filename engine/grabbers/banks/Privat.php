<?php

namespace app\grabbers\banks;

use app\models\Currency;

use app\grabbers\ExchangeRateGrabberStrategy;
use app\grabbers\ExchangeRateGrabbingStrategyInterface;

/**
 * This is class for grabbing not typical bank API
 */
class Privat extends ExchangeRateGrabberStrategy implements ExchangeRateGrabbingStrategyInterface {

    /**
     * This is how Privatbank API works
     * 
     * @throws \Exception
     */
    protected function getValues() {

        $html = file_get_contents($this->getUrl());

        if (empty($html)) {
            throw new \Exception('broken markup:no data');
        }

        $json = json_decode($html);

        if (empty($json)) throw new \Exception('broken json: no data');

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
    private function grabJson(array $json_array, $currency_id, $key) {

        if (empty($json_array[$currency_id]->$key)) {
            throw new \Exception('broken json: missing value');
        }

        return $json_array[$currency_id]->$key;

    }

}