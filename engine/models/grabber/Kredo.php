<?php

namespace app\models\grabber;

use app\models\ExchangeGrabber;
use app\models\Currency;
use serhatozles\simplehtmldom\simple_html_dom;
use serhatozles\simplehtmldom\simple_html_dom_node;

/**
 * This is class for grabbing bank
 */
class Kredo extends ExchangeGrabber {

    const bank_id = 8;

    protected static function getURL() {
        return 'http://www.kredobank.com.ua/';
    }

    protected static function grabCells(simple_html_dom $html) {
        return $html->find('#kurs', 0);
    }

    protected static function grabValues(simple_html_dom_node $cells) {

        $exchanges = array();

        // USD

        $cell = explode('/', mb_ereg_replace('&nbsp;', '', $cells->find('tr', 1)->find('td', 1)->plaintext));

        $buy = trim($cell[0])/100;
        $sale = trim($cell[1])/100;
        $check = $cells->find('tr', 1)->find('td', 0)->plaintext;

        $exchanges[Currency::DOLLAR_ID] = array('buy' => $buy, 'sale' => $sale, 'check' => $check);

        // EUR

        $cell = explode('/', mb_ereg_replace('&nbsp;', '', $cells->find('tr', 2)->find('td', 1)->plaintext));

        $buy = trim($cell[0])/100;
        $sale = trim($cell[1])/100;
        $check = $cells->find('tr', 2)->find('td', 0)->plaintext;

        $exchanges[Currency::EURO_ID] = array('buy' => $buy, 'sale' => $sale, 'check' => $check);

        // return

        return $exchanges;

    }

}