<?php

namespace app\models\grabber;

use app\models\ExchangeGrabber;
use app\models\Currency;
use serhatozles\simplehtmldom\simple_html_dom;
use serhatozles\simplehtmldom\simple_html_dom_node;

/**
 * This is class for grabbing bank
 */
class Nbu extends ExchangeGrabber {

    const bank_id = 1;

    protected static function getURL() {
        $now = new \DateTime();
        return 'http://www.bank.gov.ua/control/uk/curmetal/currency/search?formType=searchFormDate&time_step=daily&date='.$now->format('d.m.Y');
    }

    protected static function grabCells(simple_html_dom $html) {
        return $html->find('.content table', 3);
    }

    protected static function grabValues(simple_html_dom_node $cells) {

        $exchanges = array();

        // USD

        $buy = $sale = ($cells->find('tr', 6)->find('td', 4)->plaintext)/100;
        $check = $cells->find('tr', 6)->find('td', 1)->plaintext;

        $exchanges[Currency::DOLLAR_ID] = array('buy' => $buy, 'sale' => $sale, 'check' => $check);

        // EUR

        $buy = $sale = ($cells->find('tr', 7)->find('td', 4)->plaintext)/100;
        $check = $cells->find('tr', 7)->find('td', 1)->plaintext;

        $exchanges[Currency::EURO_ID] = array('buy' => $buy, 'sale' => $sale, 'check' => $check);

        // return

        return $exchanges;

    }
   
}