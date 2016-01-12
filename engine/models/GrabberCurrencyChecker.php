<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "grabber_currency_checker".
 *
 * @property string $id
 * @property string $currency_id
 * @property string $value
 *
 * @property Currency $currency
 */
class GrabberCurrencyChecker extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'grabber_currency_checker';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['currency_id', 'value'], 'required'],
            [['currency_id'], 'integer'],
            [['value'], 'string', 'max' => 64]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'currency_id' => 'Currency ID',
            'value' => 'Value',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCurrency()
    {
        return $this->hasOne(Currency::className(), ['id' => 'currency_id']);
    }
}
