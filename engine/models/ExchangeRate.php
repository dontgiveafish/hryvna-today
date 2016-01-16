<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "exchange_rates".
 *
 * @property string $id
 * @property string $bank_id
 * @property string $currency_id
 * @property string $buy
 * @property string $sale
 * @property string $grab_date
 *
 * @property Currency $currency
 * @property BankList $bank
 */
class ExchangeRate extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'exchange_rates';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['bank_id', 'currency_id', 'buy', 'sale', 'grab_date'], 'required'],
            [['bank_id', 'currency_id'], 'integer'],
            [['buy', 'sale'], 'number'],
            [['grab_date'], 'safe']
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
            'currency_id' => 'Currency ID',
            'buy' => 'Buy',
            'sale' => 'Sale',
            'grab_date' => 'Grab Date',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCurrency()
    {
        return $this->hasOne(Currency::className(), ['id' => 'currency_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getBank()
    {
        return $this->hasOne(BankList::className(), ['id' => 'bank_id']);
    }
}
