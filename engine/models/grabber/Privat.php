<?php

namespace app\models\grabber;

use app\models\ExchangeGrabber;
use app\models\Currency;
use serhatozles\simplehtmldom\simple_html_dom;
use serhatozles\simplehtmldom\simple_html_dom_node;

/**
 * This is class for grabbing bank
 */
class Privat extends ExchangeGrabber {

    const bank_id = 3;

    protected static function getURL() {
        return 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
    }

    protected static function grabCells(simple_html_dom $html = null) {}
    protected static function grabValues(simple_html_dom_node $cells = null) {}

    public function getValues() {

        $html = file_get_contents(self::getUrl());
        if (empty($html)) {
            throw new Exception('broken markup:no data');
        }

        $json = json_decode($html);

        if (empty($json)) throw new Exception('broken markup: no json');

        $exchanges = [];

        // USD

        $buy = $json[2]->buy;
        $sale = $json[2]->sale;
        $check = $json[2]->ccy;

        $exchanges[Currency::DOLLAR_ID] = array('buy' => $buy, 'sale' => $sale, 'check' => $check);

        // EUR

        $buy = $json[1]->buy;
        $sale = $json[1]->sale;
        $check = $json[1]->ccy;

        $exchanges[Currency::EURO_ID] = array('buy' => $buy, 'sale' => $sale, 'check' => $check);

        // return

        return $exchanges;

    }
   
}