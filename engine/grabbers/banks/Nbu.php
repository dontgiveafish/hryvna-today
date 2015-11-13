<?php

namespace app\grabbers\banks;

use app\grabbers\CommonBankGrabStrategy;
use app\grabbers\ExchangeRateGrabbingStrategyInterface;

/**
 * This is class for grabbing bank
 */
class Nbu extends CommonBankGrabStrategy implements ExchangeRateGrabbingStrategyInterface
{
    /**
     * This method is adding query with current date to metadata URL
     * 
     * {@inheritdoc}
     */
    protected function getURL()
    {
        $url = parent::getUrl();

        if (empty($url)) {
            return;
        }

        $query = http_build_query([
            'formType' => 'searchFormDate',
            'time_step' => 'daily',
            'date' => (new \DateTime())->format('d.m.Y')
        ]);

        return $url . '?' . $query;
    }

}