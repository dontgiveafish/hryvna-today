<?php

namespace app\grabbers;

use app\models\ExchangeRateCurrencyGrabberInfo;

use app\grabbers\ExchangeRateGrabberStrategy;
use app\grabbers\ExchangeRateGrabbingStrategyInterface;

use serhatozles\simplehtmldom\SimpleHTMLDom;
use serhatozles\simplehtmldom\simple_html_dom;
use serhatozles\simplehtmldom\simple_html_dom_node;

/**
 * This is class for common grabbing banks exchange rates
 */
class CommonBankGrabStrategy extends ExchangeRateGrabberStrategy implements ExchangeRateGrabbingStrategyInterface
{

    /** @var string String to store bank strategy name */
    protected $bankname;

    /**
     * If bankname is null, it can be only child of CommonBankGrabStrategy
     * 
     * {@inheritdoc}
     */
    public function __construct($bankname = null)
    {
        $this->bankname = empty($bankname) ? parent::getBankName() : $bankname;

        parent::__construct();
    }
    
    /**
     * {@inheritdoc}
     */
    public function getBankName()
    {
            return $this->bankname;
    }

    /**
     * This is how typical bank grabbing works
     * Get URL, scrub document, cells, exchanges, throw exception if something is empty or wrong
     * 
     * {@inheritdoc}
     */
    public function execute()
    {
        // grab bank exchange page, check

        $url = $this->getURL();

        if (empty($url)) {
            throw new \Exception('broken class:no url');
        }

        // grab bank exchange page, check

        $html = SimpleHTMLDom::file_get_html($url);

        if (empty($html)) {
            throw new \Exception('broken markup:no html');
        }

        // grab exchange table, check
        
        $cells = $this->grabCells($html);

        if (empty($cells)) {
            throw new \Exception('broken markup:no cells');
        }

        // grab exchange values

        $this->grabValues($cells);
        
        // return
        
        return $this->exchanges;
    }

    /**
     * Search for exchange cells in DOM document
     * 
     * @param simple_html_dom $html
     * @return simple_html_dom_node
     */
    protected function grabCells(simple_html_dom $html)
    {
        if (!empty($this->info['cells_selector']) && isset($this->info['cells_idx'])) {

            return $html->find($this->info['cells_selector'], $this->info['cells_idx']);

        }
    }

    /**
     * Get exchanges from cells
     * 
     * @param simple_html_dom_node $cells DOM node
     * @return void
     */
    protected function grabValues(simple_html_dom_node $cells)
    {
        $currencies = ExchangeRateCurrencyGrabberInfo::find()->where(['bank_id' => $this->getBankId()])->all();

        if (empty($currencies)) {
            throw new Exception('broken metadata: no rows for currencies');
        }

        foreach ($currencies as $currency_info) {

            foreach (['buy', 'sale', 'check'] as $key) {
                ${$key} = $this->grabTableCell(
                        $cells,
                        $currency_info->{$key . '_tr_idx'},
                        $currency_info->{$key . '_td_idx'},
                        $currency_info->{$key . '_tr_selector'},
                        $currency_info->{$key . '_td_selector'}
                );
            }

            $multiplier = empty($currency_info->currency_multiplier) ? 1 : $currency_info->currency_multiplier;

            $this->saveCurrencyValues($currency_info->currency_id, $buy * $multiplier, $sale * $multiplier, $check);

        }
    }

    /**
     * Grab, check and filter cell in exchanges DOM node
     * Most of banks store exchange values in DOM structures like table
     * This method is covering most of the job
     * 
     * @param simple_html_dom_node $cells
     * @param int $tr_idx
     * @param int $td_idx
     * @param string $tr_selector
     * @param string $td_selector
     * @return string
     * @throws \Exception
     */
    protected function grabTableCell(simple_html_dom_node $cells, $tr_idx, $td_idx, $tr_selector = null, $td_selector = null)
    {
        // reassign empty selectors if any
        
        $tr_selector = $tr_selector ?: 'tr';
        $td_selector = $td_selector ?: 'td';
               
        // get row

        $row = $cells->find($tr_selector, $tr_idx);

        if (empty($row)) {
            throw new \Exception('broken markup: no cells row');
        }

        // get cell
        
        $cell = $row->find($td_selector, $td_idx);

        if (empty($cell)) {
            throw new \Exception('broken markup: no cells cell');
        }
        
        // get data

        $data = $cell->plaintext;

        // filter data
        
        if (!empty($data)) {
            $data = str_replace(',', '.', $data);
            $data = str_replace(['&nbsp;', ' '], '', $data);
        }
        
        // return filtered result
        return $data;
    }

}