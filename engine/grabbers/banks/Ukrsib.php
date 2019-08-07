<?php

namespace app\grabbers\banks;

use app\grabbers\CommonBankGrabStrategy;
use app\grabbers\ExchangeRateGrabbingStrategyInterface;

use serhatozles\simplehtmldom\simple_html_dom_node;

/**
 * This is class for grabbing bank
 */
class Ukrsib extends CommonBankGrabStrategy implements ExchangeRateGrabbingStrategyInterface
{
    /**
     * {@inheritdoc}
     */
    protected function grabTableCell(simple_html_dom_node $cells, $tr_idx, $td_idx, $tr_selector = null, $td_selector = null)
    {
        // grab cell as usual
        $data = parent::grabTableCell($cells, $tr_idx, $td_idx, $tr_selector, $td_selector);

        // filter float from a cell
        if (preg_match("/[\\d]/", $data)) {
            $value = preg_replace("/[^0-9.]/", '', $data);

            return $value;
        }

        // get currency if this is not a value cell
        $parts = explode('.', $data);
        $currency = reset($parts);

        return $currency;
    }
}
