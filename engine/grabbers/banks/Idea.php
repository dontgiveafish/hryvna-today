<?php

namespace app\grabbers\banks;

use app\grabbers\TypicalBankStrategy;
use app\interfaces\ExchangeGrabbingStrategy;

use serhatozles\simplehtmldom\simple_html_dom;
use serhatozles\simplehtmldom\simple_html_dom_node;

/**
 * This is class for grabbing bank
 */
class Idea extends TypicalBankStrategy implements ExchangeGrabbingStrategy {

    const bank_id = 11;

    protected function getURL() {
        return 'http://www.ideabank.ua/';
    }

    protected function grabCells(simple_html_dom $html) {
        return $html->find('.currencyBox', 0);
    }

    protected function grabValues(simple_html_dom_node $cells) {

        // USD

        $buy = $this->grabTableCell($cells, 0, 0, '.currencyItem', '.buy');
        $sale = $this->grabTableCell($cells, 0, 0, '.currencyItem', '.sell');
        $check = $this->grabTableCell($cells, 0, 0, '.currencyItem', '.title');

        $this->saveDollarValues($buy, $sale, $check);

        // EUR

        $buy = $this->grabTableCell($cells, 1, 0, '.currencyItem', '.buy');
        $sale = $this->grabTableCell($cells, 1, 0, '.currencyItem', '.sell');
        $check = $this->grabTableCell($cells, 1, 0, '.currencyItem', '.title');
        $this->saveEuroValues($buy, $sale, $check);

    }

}