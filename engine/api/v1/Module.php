<?php

namespace app\api\v1;

use Yii;
use app\models\api\Log;

class Module extends \yii\base\Module
{

    /**
     * @inheritdoc
     */
    public function afterAction($action, $result)
    {
        // save log

        $log = new Log;
        $log->status = Log::STATUS_SUCCESS;
        $log->save();

        // generate answer

        $data = [
            'status' => Log::STATUS_SUCCESS,
            'data' => $result
        ];

        // add api version to headers

        $headers = Yii::$app->response->headers;
        $headers->set('Api-version', 1);

        return parent::afterAction($action, $data);
    }

}