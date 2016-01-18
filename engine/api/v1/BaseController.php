<?php

namespace app\api\v1;

use Yii;
use yii\web\Controller;

use app\models;

class BaseController extends Controller
{

    /**
     * Method to check and prepare param from query
     * @param string $param_key
     * @param string $default_value
     * @param int $filters
     * @return string
     */
    protected function prepareParam($param_key, $default_value = null, $filters = FILTER_SANITIZE_STRING)
    {
        $param_value = Yii::$app->getRequest()->getQueryParam($param_key, $default_value);
        return filter_var($param_value, $filters);
    }

    /**
     * Method to check and prepare param from query
     * @param string $param_key
     * @return integer
     */
    protected function prepareParamInt($param_key)
    {
        return $this->prepareParam($param_key, 0, FILTER_SANITIZE_NUMBER_INT);
    }

    /**
     * Method to check and prepare param from query
     * @param string $param_key
     * @return float
     */
    protected function prepareParamFloat($param_key)
    {
        return $this->prepareParam($param_key, 0, FILTER_SANITIZE_NUMBER_FLOAT);
    }

}
