<?php

namespace app\grabbers;

use app\grabbers\ExchangeRateGrabbingStrategyInterface;

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
        return $this->strategy->execute();
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

}