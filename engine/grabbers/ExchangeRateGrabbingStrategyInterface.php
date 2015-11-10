<?php

namespace app\grabbers;

interface ExchangeRateGrabbingStrategyInterface
{
    
    /**
     * Execute strategy algorithm and return array of exchanges
     * 
     * @return array
     */
    public function execute();
    
    /**
     * Get Bank ID from strategy metadata
     * 
     * @return int
     */
    public function getBankId();
}