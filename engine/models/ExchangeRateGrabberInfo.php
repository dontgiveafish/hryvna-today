<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "grabber_strategy_info".
 *
 * @property integer $id
 * @property integer $bank_id
 * @property string $name
 * @property string $url
 * @property string $cells_selector
 * @property integer $cells_idx
 *
 * @property ExchangeRateCurrencyGrabberInfo[] $grabberStrategyCurrencies
 * @property Banks $bank
 */
class ExchangeRateGrabberInfo extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'grabber_strategy_info';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['bank_id', 'cells_idx'], 'integer'],
            [['name'], 'required'],
            [['name'], 'string', 'max' => 64],
            [['url', 'cells_selector'], 'string', 'max' => 256],
            [['name'], 'unique'],
            [['bank_id'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'bank_id' => 'Bank ID',
            'name' => 'Name',
            'url' => 'Url',
            'cells_selector' => 'Cells Selector',
            'cells_idx' => 'Cells Idx',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getGrabberStrategyCurrencies()
    {
        return $this->hasMany(ExchangeRateCurrencyGrabberInfo::className(), ['strategy_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getBank()
    {
        return $this->hasOne(Banks::className(), ['id' => 'bank_id']);
    }
}
