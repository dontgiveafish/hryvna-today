<?php

namespace app\grabbers;

use app\grabbers\ExchangeRateGrabbingStrategyInterface;

class ExchangeRateGrabber {

    private $strategy;

    public function __construct(ExchangeRateGrabbingStrategyInterface $strategy) {
        $this->strategy = $strategy;
    }

    public function execute() {
        return $this->strategy->grab();
    }
    
    public function getBankId() {
        return $this->strategy->getBankId();
    }


}