<?php

namespace app\grabbers\banks;

use app\grabbers\TypicalBankStrategy;
use app\interfaces\ExchangeGrabbingStrategy;

use serhatozles\simplehtmldom\simple_html_dom;
use serhatozles\simplehtmldom\simple_html_dom_node;

/**
 * This is class for grabbing bank
 */
class Aval extends TypicalBankStrategy implements ExchangeGrabbingStrategy {

    const bank_id = 2;

    protected function getURL() {
        return 'http://aval.ua/personal/everyday/exchange/exchange/';
    }

    protected function grabCells(simple_html_dom $html) {
        return $html->find('table.right-currency', 0);
    }

    protected function grabValues(simple_html_dom_node $cells) {

        // USD

        $buy = $this->grabTableCell($cells, 1, 1);
        $sale = $this->grabTableCell($cells, 1, 2);
        $check = $this->grabTableCell($cells, 1, 0);

        $this->saveDollarValues($buy, $sale, $check);

        // EUR

        $buy = $this->grabTableCell($cells, 2, 1);
        $sale = $this->grabTableCell($cells, 2, 2);
        $check = $this->grabTableCell($cells, 2, 0);

        $this->saveEuroValues($buy, $sale, $check);

    }

}