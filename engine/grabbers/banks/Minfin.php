<?php

namespace app\grabbers\banks;

use app\models\Currency;

use app\grabbers\ExchangeRateGrabbingStrategyInterface;
use app\grabbers\CommonBankGrabStrategy;

use serhatozles\simplehtmldom\simple_html_dom_node;

/**
 * This is class for grabbing http://minfin.com.ua
 */
class Minfin extends CommonBankGrabStrategy implements ExchangeRateGrabbingStrategyInterface
{
    
    private $current_curency_alias, $current_curency_id;
    
    /**
     * This method is for adding currency alias to minfin URL
     * 
     * {@inheritdoc}
     */
    protected function getURL()
    {
        if (empty($this->current_curency_alias) || empty($this->info['url'])) {
            return;
        }

        return str_replace('%CURRENCY%', $this->current_curency_alias, $this->info['url']);
    }
    
    public function execute()
    {
        foreach ([Currency::DOLLAR_ID => 'USD', Currency::EURO_ID => 'EUR'] as $currency_id => $currency_alias) {

            $this->current_curency_id = $currency_id;
            $this->current_curency_alias = $currency_alias;
            
            parent::execute();
        }

        return $this->returnValues();
    }
    
    protected function grabValues(simple_html_dom_node $cells)
    {
        
        $buy = $this->grabTableCell($cells, '.au-mid-buysell', 0);
        $sale = $this->grabTableCell($cells, '.au-mid-buysell', 1);

        $this->saveCurrencyValues($this->current_curency_id, $buy, $sale, $this->current_curency_alias);

    }
    
    protected function grabTableCell(simple_html_dom_node $cells, $cell_selector, $cell_idx)
    {
        // get cell

        $cell = $cells->find($cell_selector, $cell_idx);

        if (empty($cell)) {
            throw new \Exception('broken markup: no cells cell');
        }

        $cell_text = $cell->innertext;

        // clear useless blocks
        
        $children = $cell->children();
        if (!empty($children)) {
            foreach ($cell->children() as $child) {
                $cell_text = str_replace($child->outertext, '', $cell_text);
            }
        }
        
        // filter data
        
        $cell_text = str_replace('грн', '', $cell_text);
        $cell_text = str_replace(',', '.', $cell_text);
        
        return trim($cell_text);        
    }
}