<?php

namespace app\commands;

use app\models\ExchangeRate;
use app\models\Currency;

use app\grabbers\ExchangeRateGrabber;
use app\grabbers\ExchangeRateGrabberStrategy;

use yii\console\Controller;

class UpdateController extends Controller
{
    /**
     * This is action to update exchanges from bank in database
     * When grab is failed, it goes again $tries_count times
     * If it is not helping, last exchange values from database will be inserted
     * 
     * @param string $strategy_classname Classname of strategy
     * @param int $tries_count Count of tries if caught exception
     * @param int $seconds_to_sleep Seconds to sleep befor new try
     * @throws \Exception
     */
    public function actionBank($strategy_classname, $tries_count = 5, $seconds_to_sleep = 10)
    {
       
        // start tries
        
        $try_number = 0;

        while (empty($exchange) && $try_number++ <= $tries_count) {

            try {

                $grabber = new ExchangeRateGrabber(ExchangeRateGrabberStrategy::create($strategy_classname));
                $data = $grabber->grab();

                $exchange = new ExchangeRate();

                $exchange->bank_id = $grabber->getBankId();
                $exchange->dollar_buy = $data[Currency::DOLLAR_ID]['buy'];
                $exchange->dollar_sale = $data[Currency::DOLLAR_ID]['sale'];
                $exchange->euro_buy = $data[Currency::EURO_ID]['buy'];
                $exchange->euro_sale = $data[Currency::EURO_ID]['sale'];
                $exchange->grab_date = (new \DateTime)->format('Y-m-d');

                
            }
            catch (\Exception $ex) {

                echo ($strategy_classname . ' is having problems: ' . trim($ex->getMessage()) . PHP_EOL);

                if ($try_number <= $tries_count) {

                    if (intval($seconds_to_sleep) > 0) {
                        sleep($seconds_to_sleep);
                    }
                    
                    echo ("Let's try again. This is try #$try_number" . PHP_EOL);

                }

            }

        }

        if (empty($exchange)) {
            
            echo ("Yesterdays exchange for $strategy_classname inserted" . PHP_EOL);

        }
        else {
            
            echo ($strategy_classname . ' is ok' . PHP_EOL);
            print_r($exchange->attributes);

        }
        
        

    }
}
