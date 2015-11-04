<?php

namespace app\models\grabber;

use app\models\ExchangeGrabber;
use app\models\Currency;
use serhatozles\simplehtmldom\simple_html_dom;
use serhatozles\simplehtmldom\simple_html_dom_node;

/**
 * This is class for grabbing bank
 */
class Pumb extends ExchangeGrabber {

    const bank_id = 13;

    protected static function getURL() {
        return 'http://pumb.ua/ua/';
    }
    
    protected static function grabCells(simple_html_dom $html) {
        return $html->find('#tab1 .currency table', 0);
    }

    protected static function grabValues(simple_html_dom_node $cells) {

        $exchanges = array();

        // USD

        $buy = $cells->find('tr', 1)->find('td', 1)->plaintext;
        $sale = $cells->find('tr', 1)->find('td', 2)->plaintext;
        $check = $cells->find('tr', 1)->find('td', 0)->plaintext;

        $exchanges[Currency::DOLLAR_ID] = array('buy' => $buy, 'sale' => $sale, 'check' => $check);

        // EUR

        $buy = $cells->find('tr', 2)->find('td', 1)->plaintext;
        $sale = $cells->find('tr', 2)->find('td', 2)->plaintext;
        $check = $cells->find('tr', 2)->find('td', 0)->plaintext;

        $exchanges[Currency::EURO_ID] = array('buy' => $buy, 'sale' => $sale, 'check' => $check);

        // return

        return $exchanges;

    }

}