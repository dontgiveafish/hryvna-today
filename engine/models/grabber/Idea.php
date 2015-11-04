<?php

namespace app\models\grabber;

use app\models\ExchangeGrabber;
use app\models\Currency;
use serhatozles\simplehtmldom\simple_html_dom;
use serhatozles\simplehtmldom\simple_html_dom_node;

/**
 * This is class for grabbing bank
 */
class Idea extends ExchangeGrabber {

    const bank_id = 11;

    protected static function getURL() {
        return 'http://www.ideabank.ua/';
    }
    
    protected static function grabCells(simple_html_dom $html) {
        return $html->find('.currencyBox', 0);
    }

    protected static function grabValues(simple_html_dom_node $cells) {

        $exchanges = array();

        // USD

        $buy = str_replace(',', '.', $cells->find('.currencyItem', 0)->find('.buy', 0)->plaintext);
        $sale = str_replace(',', '.', $cells->find('.currencyItem', 0)->find('.sell', 0)->plaintext);
        $check = $cells->find('.currencyItem', 0)->find('.title', 0)->plaintext;

        $exchanges[Currency::DOLLAR_ID] = array('buy' => $buy, 'sale' => $sale, 'check' => $check);

        // EUR

        $buy = str_replace(',', '.', $cells->find('.currencyItem', 1)->find('.buy', 0)->plaintext);
        $sale = str_replace(',', '.', $cells->find('.currencyItem', 1)->find('.sell', 0)->plaintext);
        $check = $cells->find('.currencyItem', 1)->find('.title', 0)->plaintext;

        $exchanges[Currency::EURO_ID] = array('buy' => $buy, 'sale' => $sale, 'check' => $check);

        // return

        return $exchanges;

    }

}