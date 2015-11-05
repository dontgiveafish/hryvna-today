<?php

namespace app\grabbers;

use app\grabbers\ExchangeGrabber;

use serhatozles\simplehtmldom\SimpleHTMLDom;
use serhatozles\simplehtmldom\simple_html_dom;
use serhatozles\simplehtmldom\simple_html_dom_node;

/**
 * This is abstract class for grabbing banks exchanges
 */
abstract class TypicalBankStrategy extends ExchangeGrabber {

    /**
     * Site URL generation
     * Method(not variable or constant) is used because some sites are require extra data like dates
     * 
     * @return string URL of site to grab
     */
    abstract protected function getURL();

    /**
     * Get cells with exchanges from site DOM
     * 
     * @param simple_html_dom $html DOM document fron file_get_html
     * @return simple_html_dom_node
     */
    abstract protected function grabCells(simple_html_dom $html);
    
    /**
     * Get exchanges from cells
     * 
     * @param simple_html_dom_node $cells DOM node
     * @return void
     */
    abstract protected function grabValues(simple_html_dom_node $cells);

    /**
     * This is how typical bank grabbing works
     * Get URL, scrub document, cells, exchanges, throw exception if something is empty or wrong
     * @throws \Exception
     */
    protected function getValues() {

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

        // check exchange table
        
        $cells = $this->grabCells($html);
        if (empty($cells)) {
            throw new \Exception('broken markup:no cells');
        }

        // grab exchange values

        $this->grabValues($cells);
    }

    /**
     * Grab, check and filter cell in exchanges DOM node
     * Most of banks store exchange values in DOM structures like table
     * This method is covering most of the job
     * 
     * @param simple_html_dom_node $cells
     * @param int $tr_number
     * @param int $td_number
     * @param string $tr_selector
     * @param string $td_selector
     * @return string
     * @throws \Exception
     */
    protected function grabTableCell(simple_html_dom_node $cells, $tr_number, $td_number, $tr_selector = 'tr', $td_selector = 'td') {

        // get row

        $row = $cells->find($tr_selector, $tr_number);

        if (empty($row)) {
            throw new \Exception('broken markup: no cells row');
        }

        // get cell
        
        $cell = $row->find($td_selector, $td_number);

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