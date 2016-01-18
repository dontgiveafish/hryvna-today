<?php

namespace app\api\v1\controllers;

use Yii;
use app\api\v1\BaseController;

use app\models;
use app\components;

use app\hryvna\Dashboard;

class ConvertController extends BaseController
{
    public function actionIndex()
    {
        $sum = $this->prepareParamFloat('sum');
        if (empty($sum)) return 0;

        $from = $this->prepareParamInt('from');
        $to = $this->prepareParamInt('to');

        $dashboard = new Dashboard([$from, $to]);
        $avgs = $dashboard->getAvg();

        // @todo cleanup this mess

        $from_k = ($from == 980) ? 1 : $avgs[$from]['commercial']['buy']['value'];
        $to_k   = ($to   == 980) ? 1 : $avgs[$to]['commercial']['buy']['value'];

        return $sum * $from_k / $to_k;
    }
}
