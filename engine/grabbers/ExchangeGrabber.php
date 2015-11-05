<?php

namespace app\grabbers;

use app\models\Exchange;
use app\models\Currency;

use app\interfaces\ExchangeGrabbingStrategy;

/**
 * This is abstract class for grabbing banks exchanges
 */
abstract class ExchangeGrabber {

    /** @var array Array to store grabbed exchange values */
    private $exchanges = [];

    /**
     * This is factory to create exchange rates model using grabbing strategy
     * 
     * @param ExchangeGrabbingStrategy $strategy
     * @return Exchange
     */
    public static function buildExchange(ExchangeGrabbingStrategy $strategy) {
        
        // call stragery and get values

        $values = $strategy->grab();

        // create and return model

        $exchange = new Exchange();

        $exchange->bank_id = $strategy::bank_id;
        $exchange->dollar_buy = $values[Currency::DOLLAR_ID]['buy'];
        $exchange->dollar_sale = $values[Currency::DOLLAR_ID]['sale'];
        $exchange->euro_buy = $values[Currency::EURO_ID]['buy'];
        $exchange->euro_sale = $values[Currency::EURO_ID]['sale'];
        $exchange->grab_date = (new \DateTime)->format('Y-m-d');

        return $exchange;

    }

    /**
     * This function is calling grab functions, validating values return values
     * 
     * @return array
     * @throws Exception
     */
    public function grab() {

        $this->getValues();

        if ($this->validateValues()) {
            return $this->exchanges;
        }

        throw new Exception('grabbing validation failed');

    }
    
    /**
     * Method to grab values from bank site or API
     */
    abstract protected function getValues();

    /**
     * This method is checking exchanges array and build Exchange model based on this array
     * 
     * @return Exchange
     * @throws \Exception
     */
    protected function validateValues() {

        $values = $this->exchanges;

        // check if values exists

        if (empty($values)) {
            throw new \Exception('broken markup:no exchange');
        }

        // check for values of exchanges and currency checker

        $currency_checker = [
            Currency::DOLLAR_ID => ['USD', '$'],
            Currency::EURO_ID => ['EUR', '€', '&euro;']
        ];

        foreach ($values as $currency => $exchange) {

            if ($currency * $exchange['buy'] * $exchange['sale'] == 0) {
                throw new \Exception('broken markup:no exchange');
            }

            if (!in_array($exchange['check'], $currency_checker[$currency])) {
                throw new \Exception('broken markup:check fail');
            }
        }

        return true;

    }
    
    /**
     * Method to save dollar values to exchange array
     * 
     * @param float $buy
     * @param float $sale
     * @param string $check
     */
    protected function saveDollarValues($buy, $sale, $check) {
        $this->saveCurrencyValues(Currency::DOLLAR_ID, $buy, $sale, $check);
    }

    /**
     * Method to save euro values to exchange array
     * 
     * @param float $buy
     * @param float $sale
     * @param string $check
     */
    protected function saveEuroValues($buy, $sale, $check) {
        $this->saveCurrencyValues(Currency::EURO_ID, $buy, $sale, $check);
    }
    
    /**
     * Method to save any currency values to exchange array
     * 
     * @param int $currency_id
     * @param float $buy
     * @param float $sale
     * @param string $check
     */
    private function saveCurrencyValues($currency_id, $buy, $sale, $check) {
        $this->exchanges[$currency_id] = [
            'buy' => $buy,
            'sale' => $sale,
            'check' => $check
        ];        
    }

}