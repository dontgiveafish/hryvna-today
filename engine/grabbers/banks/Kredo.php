<?php

namespace app\grabbers\banks;

use app\grabbers\CommonBankGrabStrategy;
use app\grabbers\ExchangeRateGrabbingStrategyInterface;

use serhatozles\simplehtmldom\simple_html_dom_node;

/**
 * This is class for grabbing bank
 */
class Kredo extends CommonBankGrabStrategy implements ExchangeRateGrabbingStrategyInterface
{
    /**
     * {@inheritdoc}
     */
    protected function grabTableCell(simple_html_dom_node $cells, $tr_idx, $td_idx, $tr_selector = null, $td_selector = null)
    {
        // grab cell as usual
        $data = parent::grabTableCell($cells, $tr_idx, $td_idx, $tr_selector, $td_selector);

        // separate currency code
        if ($td_idx == 0) {
            $data = substr($data, 3, 3);
        }

       return $data;
    }
}