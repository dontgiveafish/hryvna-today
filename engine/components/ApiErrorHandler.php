<?php

namespace app\components;

use Yii;
use app\models;

class ApiErrorHandler extends \yii\web\ErrorHandler
{

    /**
     * @inheridoc
     */

    protected function renderException($exception)
    {

        $log = new models\api\Log;
        $log->status = models\api\Log::STATUS_ERROR;
        $log->save();
        
        if (Yii::$app->has('response')) {
            $response = Yii::$app->getResponse();
        } else {
            $response = new Response();
        }

        $response->data = $this->convertExceptionToArray($exception);
        $response->send();
        
    }

    /**
     * @inheritdoc
     */

    protected function convertExceptionToArray(\Exception $exception) {

        switch ($exception->statusCode) {
            case 401:
                $message = 'invalid token';
                break;

            case 404:
                $message = 'uknown action';
                break;
            
            default:
                $message = $exception->getMessage();
                break;
        }


        return [
                'status' => models\api\Log::STATUS_ERROR,
                'message' => $message
        ];
    }
}