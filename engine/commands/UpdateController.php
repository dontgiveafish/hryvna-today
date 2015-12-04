<?php

namespace app\commands;

use app\models\ExchangeRate;
use app\models\ExchangeRateGrabberInfo;
use app\models\Currency;

use app\grabbers\ExchangeRateGrabber;
use app\grabbers\ExchangeRateGrabberStrategyAbstract;

use yii\console\Controller;

class UpdateController extends Controller
{
    /**
     * This is action to update exchanges from bank in database
     * When grab is failed, it goes again $tries_count times after sleeping $seconds_to_sleep seconds
     * If it is not helping, last exchange values from database will be inserted
     * 
     * @param string $strategy_classname Classname of strategy
     * @param int $tries_count Count of tries if caught exception
     * @param int $seconds_to_sleep Seconds to sleep befor new try
     */
    public function actionBank($strategy_classname, $tries_count = 5, $seconds_to_sleep = 10)
    {

        // create grabber
        try {
            $grabber = new ExchangeRateGrabber(ExchangeRateGrabberStrategyAbstract::create($strategy_classname));
        }
        catch (\Exception $ex) {
            echo ('Can\'t create grabber of ' . $strategy_classname . ': ' . trim($ex->getMessage()) . PHP_EOL);
            return;
        }

        // start tries        
        $try_number = 0;
        $today = (new \DateTime)->format('Y-m-d');

        do {
            try {
                $data = $grabber->grab();

                // @todo: hide in factory

                $exchange = ExchangeRate::find()->where(['bank_id' => $grabber->getBankId(), 'grab_date' => $today])->one();

                if (empty($exchange)) {
                    $exchange = new ExchangeRate();
                    $exchange->bank_id = $grabber->getBankId();
                    $exchange->grab_date = $today;
                }

                $exchange->dollar_buy = $data[Currency::DOLLAR_ID]['buy'];
                $exchange->dollar_sale = $data[Currency::DOLLAR_ID]['sale'];
                $exchange->euro_buy = $data[Currency::EURO_ID]['buy'];
                $exchange->euro_sale = $data[Currency::EURO_ID]['sale'];
            }
            catch (\Exception $ex) {

                echo ($strategy_classname . ' is having problems: ' . trim($ex->getMessage()) . PHP_EOL);

                // if some tries left, let's sleep for a few seconds
                if (++$try_number <= $tries_count) {
                    if (intval($seconds_to_sleep) > 0) {
                        sleep($seconds_to_sleep);
                    }

                    echo ("Let's try again. This is try #$try_number" . PHP_EOL);
                }
            }
        }
        while (empty($exchange) && $try_number <= $tries_count);

        // get last exchange rates if grabber is not working
        if (empty($exchange)) {

            // @todo: hide in factory

            $last_exchanges = ExchangeRate::find()->where(['bank_id' => $grabber->getBankId()])->orderBy('grab_date DESC')->one();

            $exchange = new ExchangeRate();
            $exchange->attributes = $last_exchanges->attributes;
            $exchange->id = null;
            $exchange->grab_date = $today;

            echo ("Last exchange rates will be inserted for $strategy_classname" . PHP_EOL);

        }

        echo ($strategy_classname . " updated with dollar $exchange->dollar_buy/$exchange->dollar_sale, euro $exchange->euro_buy/$exchange->euro_sale" . PHP_EOL);

        $exchange->save();

    }

    /**
     * Update exchanges for every bank with strategy
     * 
     * @param type $tries_count
     * @param type $seconds_to_sleep
     */
    public function actionAll($tries_count = 5, $seconds_to_sleep = 10)
    {
        $banks_to_grab = ExchangeRateGrabberInfo::find()->where(['not', ['bank_id' => null]])->orderBy('bank_id')->all();
        
        foreach ($banks_to_grab as $bank) {
            $this->actionBank($bank->name, $tries_count, $seconds_to_sleep);
        }
    }
}
