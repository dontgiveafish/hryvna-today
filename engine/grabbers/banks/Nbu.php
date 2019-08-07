<?php

namespace app\grabbers\banks;

use app\grabbers\ExchangeRateGrabberStrategyAbstract;
use app\grabbers\ExchangeRateGrabbingStrategyInterface;

use yii\helpers\ArrayHelper;

/**
 * This is class for grabbing bank
 */
class Nbu extends ExchangeRateGrabberStrategyAbstract implements ExchangeRateGrabbingStrategyInterface
{
    /**
     * This method is adapted for NBU API
     *
     * {@inheritdoc}
     */
    public function execute()
    {
        $url = $this->getURL();

        if (empty($url)) {
            throw new \LogicException('broken class:no url');
        }

        // create url, get and decode data

        $query = http_build_query([
            'json' => 'true',
            'date' => (new \DateTime())->format('Ymd'),
        ]);

        $url .= '?' . $query;

        $html = file_get_contents($url);

        if (empty($html)) {
            throw new \LogicException('broken anwer:no data');
        }

        $json = json_decode($html);

        if (empty($json)) {
            throw new \LogicException('broken json: no data');
        }

        // prepare available currency codes
        $currencies = $this->info->grabberStrategyCurrencies;

        if (!empty($currencies)) {

            $currency_codes = ArrayHelper::map($currencies, 'currency.code', 'currency.id');

            // search for available currencies and save values
            foreach ($json as $data) {
                $currency_code = $data->cc ?: null;

                if (!empty($currency_code) &&
                    !empty($currency_codes[$currency_code])
                ) {
                    $this->saveCurrencyValues(
                        $currency_codes[$currency_code],
                        $data->rate,
                        $data->rate,
                        $currency_code
                    );
                }
            }

        }

        return $this->returnValues();
    }

}