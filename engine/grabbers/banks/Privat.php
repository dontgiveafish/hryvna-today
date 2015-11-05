<?php

namespace app\grabbers\banks;

use app\grabbers\ExchangeGrabber;
use app\interfaces\ExchangeGrabbingStrategy;

/**
 * This is class for grabbing not typical bank API
 */
class Privat extends ExchangeGrabber implements ExchangeGrabbingStrategy {

    const bank_id = 3;

    protected function getValues() {

        $html = file_get_contents('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');

        if (empty($html)) {
            throw new \Exception('broken markup:no data');
        }

        $json = json_decode($html);

        if (empty($json)) throw new \Exception('broken json: no data');

        // USD

        $buy = $this->grabJson($json, 2, 'buy');
        $sale = $this->grabJson($json, 2, 'sale');
        $check = $this->grabJson($json, 2, 'ccy');

        $this->saveDollarValues($buy, $sale, $check);

        // EUR

        $buy = $this->grabJson($json, 1, 'buy');
        $sale = $this->grabJson($json, 1, 'sale');
        $check = $this->grabJson($json, 1, 'ccy');

        $this->saveEuroValues($buy, $sale, $check);

    }

    private function grabJson(array $json_array, $currency_id, $key) {

        if (empty($json_array[$currency_id]->$key)) {
            throw new \Exception('broken json: missing value');
        }

        return $json_array[$currency_id]->$key;
        
    }
   
}