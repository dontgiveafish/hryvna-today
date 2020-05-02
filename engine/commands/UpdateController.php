<?php

namespace app\commands;

use app\models\ExchangeRate;
use app\models\ExchangeRateGrabberInfo;
use app\models\Currency;

use app\grabbers\ExchangeRateGrabber;
use app\grabbers\ExchangeRateGrabberStrategyAbstract;

use Monolog\Logger;
use Yii;
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
        /** @var Logger $logger */
        $logger = Yii::$app->monolog->getLogger();

        // create grabber

        try {
            $grabber = new ExchangeRateGrabber(ExchangeRateGrabberStrategyAbstract::create($strategy_classname));
        }
        catch (\Exception $ex) {
            $logger->error('Can\'t create grabber', [
                'strategy' => $strategy_classname,
                'message' => $ex->getMessage(),
            ]);

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

                $logger->warning('Grabber is having problems', [
                    'strategy' => $strategy_classname,
                    'message' => $ex->getMessage(),
                ]);

                // if some tries left, let's sleep for a few seconds
                if (++$try_number <= $tries_count) {
                    if (intval($seconds_to_sleep) > 0) {
                        sleep($seconds_to_sleep);
                    }

                    $logger->warning('Trying to parse one more time', [
                        'strategy' => $strategy_classname,
                        'try_number' => $try_number,
                    ]);
                }
            }
        }
        while (empty($data) && $try_number <= $tries_count);

        $exchange_rates = [];

        // we have some data
        if (!empty($data)) {

            foreach ($data as $currency_id => $currency_values) {

                // check if we already have exchange rates for this day
                $exchange = ExchangeRate::find()
                    ->where([
                        'bank_id' => $grabber->getBankId(),
                        'currency_id' => $currency_id,
                        'grab_date' => $today
                    ])
                    ->one();

                // if no, create new objects
                if (empty($exchange)) {
                    $exchange = new ExchangeRate();
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

            $last_exchanges = ExchangeRate::find()
                ->where([
                    'bank_id' => $grabber->getBankId()
                ])
                ->orderBy('grab_date DESC')
                ->one();

            $last_exchanges_date = $last_exchanges->grab_date;

            // get grabbed exchange rates for last date

            $last_exchanges = ExchangeRate::find()
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
                    $exchange = new ExchangeRate();
                    $exchange->attributes = $last_exchange->attributes;
                    $exchange->id = null;
                    $exchange->grab_date = $today;
                }

                $exchange_rates[] = $exchange;
            }

            $logger->error('Inserting last exchange rates', [
                'strategy' => $strategy_classname,
            ]);
        }

        // prepare currency codes for report
        $currency_codes = ArrayHelper::map(Currency::find()->all(), 'id', 'code');

        // save exchange rates and report

        foreach ($exchange_rates as $exchange_rate) {
            $exchange_rate->save();
            $logger->info('Successfully Saved exchange rates', [
                'strategy' => $strategy_classname,
                'currency' => $currency_codes[$exchange_rate->currency_id],
                'buy' => $exchange_rate->buy,
                'sale' => $exchange_rate->sale,
            ]);
        }
    }

    /**
     * Update exchanges for every bank with strategy
     *
     * @param int $tries_count
     * @param int $seconds_to_sleep
     */
    public function actionAll($tries_count = 5, $seconds_to_sleep = 10)
    {
        $banks_to_grab = ExchangeRateGrabberInfo::find()->where(['not', ['bank_id' => null]])->orderBy('bank_id')->all();

        foreach ($banks_to_grab as $bank) {
            $this->actionBank($bank->name, $tries_count, $seconds_to_sleep);
        }
    }

}
