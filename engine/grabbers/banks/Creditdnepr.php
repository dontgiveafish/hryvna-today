<?php

namespace app\grabbers\banks;

use app\grabbers\TypicalBankStrategy;
use app\interfaces\ExchangeGrabbingStrategy;

use serhatozles\simplehtmldom\simple_html_dom;
use serhatozles\simplehtmldom\simple_html_dom_node;

/**
 * This is class for grabbing bank
 */
class Creditdnepr extends TypicalBankStrategy implements ExchangeGrabbingStrategy {

    const bank_id = 4;

    protected function getURL() {
        return 'http://creditdnepr.com.ua/ukr/online/currency-rate-precious-metals/';
    }
    
    protected function grabCells(simple_html_dom $html) {
        return $html->find('#currency-list table', 0);
    }

    protected function grabValues(simple_html_dom_node $cells) {

        // USD

        $buy = $this->grabTableCell($cells, 2, 1);
        $sale = $this->grabTableCell($cells, 2, 2);
        $check = $this->grabTableCell($cells, 2, 0);

        $this->saveDollarValues($buy, $sale, $check);

        // EUR

        $buy = $this->grabTableCell($cells, 3, 1);
        $sale = $this->grabTableCell($cells, 3, 2);
        $check = $this->grabTableCell($cells, 3, 0);

        $this->saveEuroValues($buy, $sale, $check);

    }

}