<?php

namespace app\grabbers\banks;

use app\models\Currency;

use app\grabbers\CommonBankGrabStrategy;
use app\grabbers\ExchangeRateGrabbingStrategyInterface;

use serhatozles\simplehtmldom\simple_html_dom_node;

/**
 * This is class for grabbing bank
 */
class Kredo extends CommonBankGrabStrategy implements ExchangeRateGrabbingStrategyInterface {

    protected function grabValues(simple_html_dom_node $cells) {

        // USD

        $cell = explode('/', $this->grabTableCell($cells, 1, 1));

        $buy = $cell[0] / 100;
        $sale = $cell[1] / 100;
        $check = $this->grabTableCell($cells, 1, 0);

        $this->saveCurrencyValues(Currency::DOLLAR_ID, $buy, $sale, $check);

        // EUR

        $cell = explode('/', $this->grabTableCell($cells, 2, 1));

        $buy = $cell[0] / 100;
        $sale = $cell[1] / 100;
        $check = $this->grabTableCell($cells, 2, 0);

        $this->saveCurrencyValues(Currency::EURO_ID, $buy, $sale, $check);

    }

}