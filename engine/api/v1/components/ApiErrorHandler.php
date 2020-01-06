<?php

namespace app\api\v1\components;

use Yii;
use app\models\api\ResponseStatus;

class ApiErrorHandler extends \yii\web\ErrorHandler
{
    /**
     * @inheridoc
     */
    protected function renderException($exception)
    {
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
    protected function convertExceptionToArray(\Exception $exception)
    {
        switch ($exception->statusCode) {
            case 401:
                $message = 'invalid token';
                break;

            case 404:
                $message = 'unknown action';
                break;

            default:
                $message = $exception->getMessage();
                break;
        }

        return [
            'status' => ResponseStatus::STATUS_ERROR,
            'message' => $message
        ];
    }
}