<?php

namespace app\models;

use Yii;
use app\models\Currency;

use serhatozles\simplehtmldom\SimpleHTMLDom;
use serhatozles\simplehtmldom\simple_html_dom;
use serhatozles\simplehtmldom\simple_html_dom_node;

/**
 * This is abstract class for grabbing banks exchanges
 */
abstract class ExchangeGrabber extends Exchange {

    abstract protected static function getURL();
    abstract protected static function grabCells(simple_html_dom $html);
    abstract protected static function grabValues(simple_html_dom_node $cells);

    /**
     * This function is calling grab functions, checking values and saving values in exchanges model
     * 
     * @return \app\models\ExchangeGrabber
     * @throws Exception
     */
    public function grab() {

        $values = $this->getValues();

        $this->fillValues($values);

        return $this;

    }
    
    protected function getValues() {
        // grab bank exchange page, check

        $url = static::getURL();

        if (empty($url)) {
            throw new \Exception('broken class:no url');
        }

        // grab bank exchange page, check

        $html = SimpleHTMLDom::file_get_html($url);
        if (empty($html)) {
            throw new \Exception('broken markup:no html');
        }

        // check exchange table
        
        $cells = static::grabCells($html);
        if (empty($cells)) {
            throw new \Exception('broken markup:no cells');
        }

        // grab exchange values

        return $this->grabValues($cells);
    }

    protected function fillValues($values) {

        if (empty($values)) {
            throw new \Exception('broken markup:no exchange');
        }

        // check for values of exchanges and currency checker

        $currency_checker = [
            Currency::DOLLAR_ID => ['USD', '$'],
            Currency::EURO_ID => ['EUR', '€', '&euro;']
        ];

        foreach ($values as $currency => $exchange) {
            $values[$currency] = $exchange = array_map('trim', $exchange);

            if ($currency * $exchange['buy'] * $exchange['sale'] == 0) {
                throw new \Exception('broken markup:no exchange');
            }

            if (!in_array($exchange['check'], $currency_checker[$currency])) {
                throw new \Exception('broken markup:check fail');
            }
        }

        // save model data
       
        $this->bank_id = static::bank_id;
        $this->dollar_buy = $values[Currency::DOLLAR_ID]['buy'];
        $this->dollar_sale = $values[Currency::DOLLAR_ID]['sale'];
        $this->euro_buy = $values[Currency::EURO_ID]['buy'];
        $this->euro_sale = $values[Currency::EURO_ID]['sale'];
        $this->grab_date = (new \DateTime)->format('Y-m-d');
        
    }
    
}
