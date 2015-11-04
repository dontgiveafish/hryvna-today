<?php

namespace app\commands;

use yii\console\Controller;

class UpdateController extends Controller
{
    /**
     * 
     * @param type $bank
     * @throws \Exception
     */
    public function actionBank($bank)
    {

        $bank_classname = "app\models\grabber\\$bank";

        if (!class_exists($bank_classname)) {
            throw new \Exception("Class for $bank not found");
        }

        $grabber = new $bank_classname();

        $grabber->grab();

        print_r($grabber->attributes);
        

    }
}
