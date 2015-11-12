<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;
use app\models;
use app\components;

use yii\filters\auth\QueryParamAuth;

class V1Controller extends Controller
{

    public function behaviors()
    {
        return [
            'authenticator' => [
                'class' => QueryParamAuth::className(),
                'tokenParam' => 'access_token',
            ]
        ];

    }

    /**
     * @inheritdoc
     */
    public function afterAction($action, $result) {

        // save log
        
        $log = new models\api\Log;
        $log->status = models\api\Log::STATUS_SUCCESS;
        $log->save();

        // generate answer
        
        $data = [
            'status' => models\api\Log::STATUS_SUCCESS,
            'data' => $result
        ];
               
        return parent::afterAction($action, $data);
    }

    /**
     * Method to check and prepare param from query
     * @param string $param_key
     * @param string $default_value
     * @return string
     */
    private function prepareParam($param_key, $default_value = null) {
        $param_value = Yii::$app->getRequest()->getQueryParam($param_key, $default_value);
        return filter_var($param_value, FILTER_SANITIZE_STRING);
    }

    /**
     * Method to check and prepare date param
     * @param type $param
     * @return \DateTime
     * @throws Exception
     */
    private function prepareDate($param = 'date') {
        
        $string_date = $this->prepareParam($param);
        
        if (empty($string_date)) {
            return null;
        }
        
        $today = \DateTime::createFromFormat(components\Hryvna::DATE_FORMAT, $string_date);
        if (empty($today)) {
            throw new \Exception('unknown date format');
        }
        
        return $today;
    }
    
    /**
     * Method to check and prepare period param
     * @param type $param
     * @return int
     * @throws \Exception
     */
    private function preparePeriod($param = 'period') {

        $string_period = $this->prepareParam($param);
        
        if (empty($string_period)) {
            return -10;
        }
        
        $period = intval($string_period);
        
        if ($period < 1 || $period > 10) {
            throw new \Exception('wrong period format');
        }
        
        return -$period;
    }
    
    /**
     * Method to check and prepare delta param
     * @param type $param
     * @return int
     * @throws \Exception
     */
    private function prepareDelta($param = 'delta') {
        
        $string_delta = $this->prepareParam($param);

        if (empty($string_delta)) {
            return 1;
        }
        
        $delta = intval($string_delta);
        
        if ($delta < 1) {
            throw new \Exception('wrong delta format');
        }

        return $delta;
    }
    
    /**
     * Actual date is a last date when exchanges for all bank are ready
     * @return String Date string in mysql format(Y-m-d)
     */
    public function actionActualdate()
    {       
        return Yii::$app->hryvna->getActualDate();
    }

    /**
     * Giving average exchanges for one day
     * This is using on first screen of site
     * @param \DateTime $today
     * @return array
     */
    public function actionAvg()
    {
        $today = $this->prepareDate();
        return Yii::$app->hryvna->getAvg($today);
    }
   
    /**
     * Getting history of exchanges
     * @return array
     */
    public function actionDays()
    {
        $today = $this->prepareDate();
        $period = $this->preparePeriod();
        $delta = $this->prepareDelta();

        return Yii::$app->hryvna->getDays($today, $period, $delta);
    }

    /**
     * List of actual banks ordered in site style
     * @return array
     */
    public function actionBanklist() {
        return models\Bank::find()->orderBy([
            new \yii\db\Expression('FIELD(rate, 0), rate, id'),            
        ])->all();
    }
    
    /**
     * Getting exchanges in banks for selected period
     * @return array
     */
    public function actionBankdays()
    {
        $today = $this->prepareDate();
        $period = $this->preparePeriod();

        return Yii::$app->hryvna->getBankDays($today, $period);
    }
    
    /**
     * Getting information from first page of site with one request
     * @return array
     */
    public function actionLanding() {
        return [
            'actual_date' => Yii::$app->hryvna->getActualDate(),
            'avg' => Yii::$app->hryvna->getAvg(),
            'days' => Yii::$app->hryvna->getDays(),
            'banks' => Yii::$app->hryvna->getBankDays(null, -1)
        ];
    }

}
