<?php

namespace app\models\grabber;

use app\models\ExchangeGrabber;
use app\models\Currency;
use serhatozles\simplehtmldom\simple_html_dom;
use serhatozles\simplehtmldom\simple_html_dom_node;

/**
 * This is class for grabbing bank
 */
class Pivdenniy extends ExchangeGrabber {

    const bank_id = 14;

    protected static function getURL() {
        return 'http://bank.com.ua/ru/rates/';
    }

    protected static function grabCells(simple_html_dom $html) {
        return $html->find('.content table', 0);
    }

    protected static function grabValues(simple_html_dom_node $cells) {

        $exchanges = array();

        // USD

        $buy = str_replace(' ', '', str_replace(',', '.', $cells->find('tr', 5)->find('td', 2)->plaintext))/100;
        $sale = str_replace(' ', '', str_replace(',', '.', $cells->find('tr', 5)->find('td', 3)->plaintext))/100;
        $check = $cells->find('tr', 5)->find('td', 1)->plaintext;

        $exchanges[Currency::DOLLAR_ID] = array('buy' => $buy, 'sale' => $sale, 'check' => $check);

        // EUR

        $buy = str_replace(' ', '', str_replace(',', '.', $cells->find('tr', 2)->find('td', 2)->plaintext))/100;
        $sale = str_replace(' ', '', str_replace(',', '.', $cells->find('tr', 2)->find('td', 3)->plaintext))/100;
        $check = $cells->find('tr', 2)->find('td', 1)->plaintext;

        $exchanges[Currency::EURO_ID] = array('buy' => $buy, 'sale' => $sale, 'check' => $check);

        // return

        return $exchanges;

    }

}