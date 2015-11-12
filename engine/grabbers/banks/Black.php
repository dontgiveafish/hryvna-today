<?php

namespace app\grabbers\banks;

use app\grabbers\ExchangeRateGrabberStrategyAbstract;
use app\grabbers\ExchangeRateGrabbingStrategyInterface;
use app\grabbers\CommonBankGrabStrategy;

/**
 * This is class for collection all black exchange rates
 */
class Black extends ExchangeRateGrabberStrategyAbstract implements ExchangeRateGrabbingStrategyInterface
{
    /**
     * This calls other black strategies and gives middle
     * 
     * {@inheritdoc}
     */
    public function execute()
    {

        $strategies = [new Finance(), new Minfin(), new CommonBankGrabStrategy('Telegraf')];

        $exchanges = [];

        foreach ($strategies as $strategy) {

            try {
                $data = $strategy->execute();

                // if we are here, values are valid

                foreach ($data as $currency_id => $values) {

                    if (empty($exchanges[$currency_id])) {
                        $exchanges[$currency_id] = [
                            'count' => 0,
                            'buy' => 0,
                            'sale' => 0,
                            'check' => $values['check']
                        ];
                    }

                    ++$exchanges[$currency_id]['count'];
                    $exchanges[$currency_id]['buy'] += $values['buy'];
                    $exchanges[$currency_id]['sale'] += $values['sale'];

                }

            }
            catch (\Exception $ex) {
                // @todo do something
            }

        }

        if (!empty($exchanges)) {
            foreach ($exchanges as $currency_id => $values) {
                if ($values['count'] > 0) {
                    $this->exchanges[$currency_id] = [
                        'buy' => $values['buy'] / $values['count'],
                        'sale' => $values['sale'] / $values['count'],
                        'check' => $values['check']
                    ];
                }
            }
        }

        return $this->returnValues();
    }

}