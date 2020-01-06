<?php

namespace app\api\v1;

use Yii;
use app\models\api\ResponseStatus;

class Module extends \yii\base\Module
{
    /**
     * @inheritdoc
     */
    public function afterAction($action, $result)
    {
        // generate answer

        $data = [
            'status' => ResponseStatus::STATUS_SUCCESS,
            'data' => $result
        ];

        // add api version to headers

        $headers = Yii::$app->response->headers;
        $headers->set('Api-version', 1);

        return parent::afterAction($action, $data);
    }

}