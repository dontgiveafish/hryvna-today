<?php

namespace app\grabbers\banks;

use app\grabbers\TypicalBankStrategy;
use app\interfaces\ExchangeGrabbingStrategy;

use serhatozles\simplehtmldom\simple_html_dom;
use serhatozles\simplehtmldom\simple_html_dom_node;

/**
 * This is class for grabbing bank
 */
class Nbu extends TypicalBankStrategy implements ExchangeGrabbingStrategy {

    const bank_id = 1;

    protected function getURL() {
        $now = new \DateTime();
        return 'http://www.bank.gov.ua/control/uk/curmetal/currency/search?formType=searchFormDate&time_step=daily&date='.$now->format('d.m.Y');
    }

    protected function grabCells(simple_html_dom $html) {
        return $html->find('.content table', 3);
    }

    protected function grabValues(simple_html_dom_node $cells) {

        // USD

        $buyandsale = $this->grabTableCell($cells, 6, 4) / 100;
        $check = $this->grabTableCell($cells, 6, 1);

        $this->saveDollarValues($buyandsale, $buyandsale, $check);

        // EUR

        $buyandsale = $this->grabTableCell($cells, 7, 4) / 100;
        $check = $this->grabTableCell($cells, 7, 1);

        $this->saveEuroValues($buyandsale, $buyandsale, $check);

    }

}