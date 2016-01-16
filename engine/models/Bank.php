<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "bank_list".
 *
 * @property integer $id
 * @property string $type
 * @property string $title
 * @property integer $rate
 *
 * @property ExchangeRates[] $exchangeRates
 * @property GrabberStrategyInfo $grabberStrategyInfo
 */
class Bank extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'bank_list';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['type_id', 'rate'], 'integer'],
            [['title'], 'required'],
            [['title'], 'string', 'max' => 512]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'type_id' => 'Type ID',
            'title' => 'Title',
            'rate' => 'Rate',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getType()
    {
        return $this->hasOne(BankType::className(), ['id' => 'type_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getExchangeRates()
    {
        return $this->hasMany(ExchangeRates::className(), ['bank_id' => 'id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getGrabberStrategyInfo()
    {
        return $this->hasOne(GrabberStrategyInfo::className(), ['bank_id' => 'id']);
    }
}
