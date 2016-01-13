<?php

namespace app\commands;

use app\models\ExchangeRate;
use app\models\ExchangeRateNew;
use app\models\ExchangeRateGrabberInfo;
use app\models\Currency;

use app\grabbers\ExchangeRateGrabber;
use app\grabbers\ExchangeRateGrabberStrategyAbstract;

use yii\helpers\ArrayHelper;
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
        while (empty($data) && $try_number <= $tries_count);

        $exchange_rates = [];

        // we have some data
        if (!empty($data)) {

            foreach ($data as $currency_id => $currency_values) {

                // check if we already have exchange rates for this day
                $exchange = ExchangeRateNew::find()
                    ->where([
                        'bank_id' => $grabber->getBankId(),
                        'currency_id' => $currency_id,
                        'grab_date' => $today
                    ])
                    ->one();

                // if no, create new objects
                if (empty($exchange)) {
                    $exchange = new ExchangeRateNew();
                    $exchange->bank_id = $grabber->getBankId();
                    $exchange->currency_id = $currency_id;
                    $exchange->grab_date = $today;
                }

                // fill buy and sale values
                $exchange->buy = $currency_values['buy'];
                $exchange->sale = $currency_values['sale'];

                // add to exchange rates array
                $exchange_rates[] = $exchange;

            }
        }
        // get last exchange rates if grabber is not working
        else {

            // get last grabbed date

            $last_exchanges = ExchangeRateNew::find()
                ->where([
                    'bank_id' => $grabber->getBankId()
                ])
                ->orderBy('grab_date DESC')
                ->one();

            $last_exchanges_date = $last_exchanges->grab_date;

            // get grabbed exchange rates for last date

            $last_exchanges = ExchangeRateNew::find()
                ->where([
                    'bank_id' => $grabber->getBankId(),
                    'grab_date' => $last_exchanges_date
                ])
                ->all();

            // save each exchange rate

            foreach ($last_exchanges as $last_exchange) {
                if ($last_exchange->grab_date == $today) {
                    $exchange = $last_exchange;
                }
                else {
                    $exchange = new ExchangeRateNew();
                    $exchange->attributes = $last_exchange->attributes;
                    $exchange->id = null;
                    $exchange->grab_date = $today;
                }

                $exchange_rates[] = $exchange;
            }

            echo ("Last exchange rates from $last_exchanges_date will be inserted for $strategy_classname" . PHP_EOL);

        }

        // prepare currency codes for report
        $currency_codes = ArrayHelper::map(Currency::find()->all(), 'id', 'code');

        // save exchange rates and report

        echo ($strategy_classname . ' ');

        foreach ($exchange_rates as $exchange_rate) {
            echo(
                $currency_codes[$exchange_rate->currency_id] . ':' .
                $exchange_rate->buy . '/' .
                $exchange_rate->sale . ' '
            );

            $exchange_rate->save();
        }

        echo (PHP_EOL);

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

    public function actionMigrate()
    {

        $currencies = [
            840 => 'dollar',
            978 => 'euro'
        ];
        $old_rates = ExchangeRate::find()->orderBy('id')->all();

        foreach ($old_rates as $old_rate) {
            $rate_layout = new ExchangeRateNew();
            $rate_layout->bank_id = $old_rate->bank_id;
            $rate_layout->grab_date = $old_rate->grab_date;

            foreach ($currencies as $currency_id => $currency_name) {
                $new_rate = clone $rate_layout;

                $new_rate->currency_id = $currency_id;
                $new_rate->buy = $old_rate->{$currency_name . '_buy'};
                $new_rate->sale = $old_rate->{$currency_name . '_sale'};

                $new_rate->save();
                echo  ("Added rate #$new_rate->id" . PHP_EOL);
            }

        }

        die;
    }
}
