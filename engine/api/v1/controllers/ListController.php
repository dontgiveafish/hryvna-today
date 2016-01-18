<?php

namespace app\api\v1\controllers;

use Yii;
use app\api\v1\BaseController;

class ListController extends BaseController
{

    public function actionCurrencies()
    {
        return \app\models\Currency::find()->orderBy('id')->all();
    }

    public function actionBanks()
    {
        return \app\models\Bank::find()->orderBy('id')->all();
    }

    public function actionBank_types()
    {
        return \app\models\BankType::find()->orderBy('id')->all();
    }

}