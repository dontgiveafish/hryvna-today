<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "currency".
 *
 * @property integer $id
 * @property string $code
 * @property string $title
 * @property string $verbal
 * @property string $symbol
 *
 * @property ExchangeRates[] $exchangeRates
 * @property GrabberCurrencyChecker[] $grabberCurrencyCheckers
 * @property GrabberStrategyCurrency[] $grabberStrategyCurrencies
 * @property SiteCurrencyRates[] $siteCurrencyRates
 */
class Currency extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'currency';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'code', 'title'], 'required'],
            [['id'], 'integer'],
            [['code'], 'string', 'max' => 5],
            [['title', 'verbal', 'symbol'], 'string', 'max' => 128]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'code' => 'Code',
            'title' => 'Title',
            'verbal' => 'Verbal',
            'symbol' => 'Symbol',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getExchangeRates()
    {
        return $this->hasMany(ExchangeRates::className(), ['currency_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getGrabberCurrencyCheckers()
    {
        return $this->hasMany(GrabberCurrencyChecker::className(), ['currency_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getGrabberStrategyCurrencies()
    {
        return $this->hasMany(GrabberStrategyCurrency::className(), ['currency_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getSiteCurrencyRates()
    {
        return $this->hasMany(SiteCurrencyRates::className(), ['currency_id' => 'id']);
    }
}
