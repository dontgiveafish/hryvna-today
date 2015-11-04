<?php

namespace app\models\grabber;

use app\models\ExchangeGrabber;
use app\models\Currency;
use serhatozles\simplehtmldom\simple_html_dom;
use serhatozles\simplehtmldom\simple_html_dom_node;

/**
 * This is class for grabbing bank
 */
class Oschadny extends ExchangeGrabber {

    const bank_id = 5;

    protected static function getURL() {
        return 'http://oschadnybank.com/ua/private/currency/currency_rates/';
    }
    
    protected static function grabCells(simple_html_dom $html) {
        return $html->find('.content_block table.table-striped', 0);
    }

    protected static function grabValues(simple_html_dom_node $cells) {

        $exchanges = array();

        // USD

        $buy = $cells->find('tr', 1)->find('td', 5)->plaintext/100;
        $sale = $cells->find('tr', 1)->find('td', 6)->plaintext/100;
        $check = $cells->find('tr', 1)->find('td', 0)->plaintext;

        $exchanges[Currency::DOLLAR_ID] = array('buy' => $buy, 'sale' => $sale, 'check' => $check);

        // EUR

        $buy = $cells->find('tr', 2)->find('td', 5)->plaintext/100;
        $sale = $cells->find('tr', 2)->find('td', 6)->plaintext/100;
        $check = $cells->find('tr', 2)->find('td', 0)->plaintext;

        $exchanges[Currency::EURO_ID] = array('buy' => $buy, 'sale' => $sale, 'check' => $check);

        // return

        return $exchanges;

    }

}