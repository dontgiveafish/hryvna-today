<?php

namespace app\grabbers\banks;

use app\grabbers\TypicalBankStrategy;
use app\interfaces\ExchangeGrabbingStrategy;

use serhatozles\simplehtmldom\simple_html_dom;
use serhatozles\simplehtmldom\simple_html_dom_node;

/**
 * This is class for grabbing bank
 */
class Oschadny extends TypicalBankStrategy implements ExchangeGrabbingStrategy {

    const bank_id = 5;

    protected function getURL() {
        return 'http://oschadnybank.com/ua/private/currency/currency_rates/';
    }
    
    protected function grabCells(simple_html_dom $html) {
        return $html->find('.content_block table.table-striped', 0);
    }

    protected function grabValues(simple_html_dom_node $cells) {

        // USD

        $buy = $this->grabTableCell($cells, 1, 5) / 100;
        $sale = $this->grabTableCell($cells, 1, 6) /100;
        $check = $this->grabTableCell($cells, 1, 0);

        $this->saveDollarValues($buy, $sale, $check);

        // EUR

        $buy = $this->grabTableCell($cells, 2, 5) / 100;
        $sale = $this->grabTableCell($cells, 2, 6) / 100;
        $check = $this->grabTableCell($cells, 2, 0);

        $this->saveEuroValues($buy, $sale, $check);

    }

}