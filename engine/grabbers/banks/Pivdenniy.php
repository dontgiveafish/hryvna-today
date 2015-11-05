<?php

namespace app\grabbers\banks;

use app\grabbers\TypicalBankStrategy;
use app\interfaces\ExchangeGrabbingStrategy;

use serhatozles\simplehtmldom\simple_html_dom;
use serhatozles\simplehtmldom\simple_html_dom_node;

/**
 * This is class for grabbing bank
 */
class Pivdenniy extends TypicalBankStrategy implements ExchangeGrabbingStrategy {

    const bank_id = 14;

    protected function getURL() {
        return 'http://bank.com.ua/ru/rates/';
    }

    protected function grabCells(simple_html_dom $html) {
        return $html->find('.content table', 0);
    }

    protected function grabValues(simple_html_dom_node $cells) {

        // USD

        $buy = $this->grabTableCell($cells, 5, 2) / 100;
        $sale = $this->grabTableCell($cells, 5, 3) / 100;
        $check = $this->grabTableCell($cells, 5, 1);

        $this->saveDollarValues($buy, $sale, $check);

        // EUR

        $buy = $this->grabTableCell($cells, 2, 2) / 100;
        $sale = $this->grabTableCell($cells, 2, 3) / 100;
        $check = $this->grabTableCell($cells, 2, 1);

        $this->saveEuroValues($buy, $sale, $check);

    }

}