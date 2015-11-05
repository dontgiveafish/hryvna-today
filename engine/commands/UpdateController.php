<?php

namespace app\commands;

use app\grabbers\ExchangeGrabber;

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

        // look for exchange grabbing strategy class
        
        $strategy_classname_full = "app\grabbers\banks\\$strategy_classname";

        if (!class_exists($strategy_classname_full)) {
            throw new \Exception("Strategy for $strategy_classname not found");
        }

        $strategy = new $strategy_classname_full();

        // start tries
        
        $try_number = 0;

        while (empty($exchange) && $try_number++ <= $tries_count) {

            try {
                $exchange = ExchangeGrabber::buildExchange($strategy);
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
