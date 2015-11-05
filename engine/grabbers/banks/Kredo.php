<?php

namespace app\grabbers\banks;

use app\grabbers\TypicalBankStrategy;
use app\interfaces\ExchangeGrabbingStrategy;

use serhatozles\simplehtmldom\simple_html_dom;
use serhatozles\simplehtmldom\simple_html_dom_node;

/**
 * This is class for grabbing bank
 */
class Kredo extends TypicalBankStrategy implements ExchangeGrabbingStrategy {

    const bank_id = 8;

    protected function getURL() {
        return 'http://www.kredobank.com.ua/';
    }

    protected function grabCells(simple_html_dom $html) {
        return $html->find('#kurs', 0);
    }

    protected function grabValues(simple_html_dom_node $cells) {

        // USD

        $cell = explode('/', $this->grabTableCell($cells, 1, 1));

        $buy = $cell[0] / 100;
        $sale = $cell[1] / 100;
        $check = $this->grabTableCell($cells, 1, 0);

        $this->saveDollarValues($buy, $sale, $check);

        // EUR

        $cell = explode('/', $this->grabTableCell($cells, 2, 1));

        $buy = $cell[0] / 100;
        $sale = $cell[1] / 100;
        $check = $this->grabTableCell($cells, 2, 0);

        $this->saveEuroValues($buy, $sale, $check);

    }

}