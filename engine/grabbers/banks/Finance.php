<?php

namespace app\grabbers\banks;

use app\grabbers\CommonBankGrabStrategy;
use app\grabbers\ExchangeRateGrabbingStrategyInterface;

use serhatozles\simplehtmldom\simple_html_dom_node;

/**
 * This is class for grabbing http://finance.i.ua
 */
class Finance extends CommonBankGrabStrategy implements ExchangeRateGrabbingStrategyInterface
{

    /**
     * Grabber for finance.i.ua is a bit deeper than a common
     * 
     * @param simple_html_dom_node $cells
     * @param type $tr_idx
     * @param type $td_idx
     * @return type
     * @throws \Exception
     */
    protected function grabTableCell(simple_html_dom_node $cells, $tr_idx, $td_idx)
    {
        $row = $cells->find('tr', $tr_idx);

        if (empty($row)) {
            throw new \LogicException('broken markup: no cells row');
        }

        $cell = $row->find('td', $td_idx);
        if (!empty($cell)) {
            $cell = $cell->first_child();
        }

        if (empty($cell)) {
            throw new \LogicException('broken markup: no cells cell');
        }

        return trim($cell->plaintext);
    }
}