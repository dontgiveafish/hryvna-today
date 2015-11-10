<?php

namespace app\grabbers;

use app\models\ExchangeRateGrabberInfo;
use app\grabbers\CommonBankGrabStrategy;

/**
 * This is abstract class for grabbing banks exchanges
 */
abstract class ExchangeRateGrabberStrategy
{

    /** @var array Array to store grabbed exchange values */
    protected $exchanges = [];

    /** @var ExchangeRateGrabberInfo Metadata of grabber */
    protected $info;

    /**
     * Create strategry from strategy name
     * It can return existing class object or construct CommonBankGrabStrategy with bankname
     * 
     * @param string $bankname
     * @return ExchangeRateGrabbingStrategyInterface
     */
    public static function create($bankname)
    {
        $classname = __NAMESPACE__ . '\\banks\\' . $bankname;

        if (class_exists($classname)) {
            return new $classname;
        }

        return new CommonBankGrabStrategy($bankname);
    }

    /**
     * Constructor is getting database grabber info from class name
     * 
     * @throws \Exception Throws \Exception if echange rate grabber info not found
     */
    public function __construct()
    {
        $classname = $this->getBankName();

        $info = ExchangeRateGrabberInfo::find()->where(['name' => $classname])->one();

        if (empty($info)) {
            throw new \Exception("broken class: metadata for $classname not found");
        }

        $this->info = $info->attributes;
    }

    /**
     * Site URL generation
     * Method(not variable or constant) is used because some sites are require extra data like dates
     * 
     * @return string URL of site to grab
     */
    protected function getUrl()
    {
        if (!empty($this->info['url'])) {
            return $this->info['url'];
        }
    }

    /**
     * Get Bank ID from strategy metadata
     * 
     * @return int
     */
    public function getBankId()
    {
        if (!empty($this->info['bank_id'])) {
            return $this->info['bank_id'];
        }
    }
    
    /**
     * Getting bank grabbing strategy name from classname
     * 
     * @return string
     */
    public function getBankName()
    {
        $classname = get_class($this);
        $classname = substr($classname, strrpos($classname, '\\') + 1);
        
        return $classname;
    }
   
    /**
     * Method to save any currency values to exchange array
     * 
     * @param int $currency_id
     * @param float $buy
     * @param float $sale
     * @param string $check
     */
    protected function saveCurrencyValues($currency_id, $buy, $sale, $check)
    {
        $this->exchanges[$currency_id] = [
            'buy' => $buy,
            'sale' => $sale,
            'check' => $check
        ];        
    }

}