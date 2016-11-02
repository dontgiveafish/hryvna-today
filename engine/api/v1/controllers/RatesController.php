<?php

namespace app\api\v1\controllers;

use Yii;
use yii\helpers\ArrayHelper;
use app\api\v1\BaseController;

use app\models;
use app\components;

use app\models\Currency;

use app\hryvna\Dashboard;

class RatesController extends BaseController
{

    private function getDashboard(array $currencies = null)
    {
        if (empty($currencies)) {

            $currencies = ArrayHelper::getColumn(
                Currency::find()->orderBy('id')->all(),
                'id');
            ;
        }

        return new Dashboard($currencies, Dashboard::FLAG_CALCULATE_DIFF);
    }

    /**
     * Giving average exchanges for one day
     * This is using on first screen of site
     * @return array
     */
    public function actionToday()
    {
        $dashboard = $this->getDashboard();
        return $dashboard->getAvg();
    }
   
    /**
     * Getting history of exchanges
     * @return array
     */
    public function actionAverages()
    {
        $dashboard = $this->getDashboard();

        $period_length = $this->prepareParamInt('period_length');
        if (empty($period_length)) {
            $period_length = 10;
        }

        return $dashboard->getAvgHistory($period_length);
    }

    /**
     * Getting exchanges in banks for selected period
     * @return array
     */
    public function actionBanks()
    {
        $dashboard = $this->getDashboard();
        return $dashboard->getBanksHistory();
    }
    
    /**
     * Getting information from first page of site with one request
     * @return array
     */
    public function actionLanding()
    {
        $currencies = ArrayHelper::getColumn(
            models\SiteCurrency::find()->orderBy('rate')->all(),
            'currency_id'
        );

        $dashboard = $this->getDashboard($currencies);

        return [
            'avg' => $dashboard->getAvg(),
            'days' => $dashboard->getAvgHistory(),
            'banks' => $dashboard->getBanksHistory()
        ];
    }

}
