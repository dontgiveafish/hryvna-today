<?php

namespace app\grabbers;

use app\models\ExchangeRateCurrencyGrabberInfo;

use app\grabbers\ExchangeRateGrabberStrategyAbstract;
use app\grabbers\ExchangeRateGrabbingStrategyInterface;

use serhatozles\simplehtmldom\SimpleHTMLDom;
use serhatozles\simplehtmldom\simple_html_dom;
use serhatozles\simplehtmldom\simple_html_dom_node;

/**
 * This is class for common grabbing banks exchange rates
 */
class CommonBankGrabStrategy extends ExchangeRateGrabberStrategyAbstract implements ExchangeRateGrabbingStrategyInterface
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

        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION , 1);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_USERAGENT, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36');
        $str = curl_exec($curl);

        if (empty($str)) {
            throw new \Exception('broken remote:no document on link');
        }
        
        $html = SimpleHTMLDom::str_get_html($str);

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
        
        return $this->returnValues();
    }

    /**
     * Search for exchange cells in DOM document
     * 
     * @param simple_html_dom $html
     * @return simple_html_dom_node
     */
    protected function grabCells(simple_html_dom $html)
    {
        if (!empty($this->info->cells_selector) && isset($this->info->cells_idx)) {

            return $html->find($this->info->cells_selector, $this->info->cells_idx);

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
        
        $currencies = $this->info->grabberStrategyCurrencies;

        if (empty($currencies)) {
            throw new \Exception('broken metadata: no rows for currencies');
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