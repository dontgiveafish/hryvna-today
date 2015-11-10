<?php

namespace app\grabbers;

use app\grabbers\ExchangeRateGrabbingStrategyInterface;
use app\models\Currency;

class ExchangeRateGrabber
{

    /** @var ExchangeRateGrabbingStrategyInterface Variable to store strategy */
    private $strategy;

    /**
     * Construct grabber with loading strategy
     * 
     * @param ExchangeRateGrabbingStrategyInterface $strategy
     */
    public function __construct(ExchangeRateGrabbingStrategyInterface $strategy)
    {
        $this->strategy = $strategy;
    }

    /**
     * Returns array of exchanges where key is currency ID and value is array of buy and sale values
     * 
     * @return array
     * @throws \Exception
     */
    public function grab()
    {    
        $data = $this->strategy->execute();
        
        if (!$this->validateValues($data)) {
            throw new \Exception('strategy data validation failed');
        }
        
        return $data;
    }
    
    /**
     * Get Bank ID from strategy metadata
     * 
     * @return int
     */
    public function getBankId()
    {
        return $this->strategy->getBankId();
    }

    /**
     * This method is checking exchange rates array from strategy
     * 
     * @return Exchange
     * @throws \Exception
     */
    private function validateValues($values)
    {
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
}