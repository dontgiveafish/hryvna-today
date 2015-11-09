<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "grab_banks_currency".
 *
 * @property integer $id
 * @property integer $bank_id
 * @property integer $currency_id
 * @property string $currency_multiplier
 * @property string $sale_tr_selector
 * @property integer $sale_tr_idx
 * @property string $sale_td_selector
 * @property integer $sale_td_idx
 * @property string $buy_tr_selector
 * @property integer $buy_tr_idx
 * @property string $buy_td_selector
 * @property integer $buy_td_idx
 * @property string $check_tr_selector
 * @property integer $check_tr_idx
 * @property string $check_td_selector
 * @property integer $check_td_idx
 *
 * @property Currency $currency
 * @property Banks $bank
 */
class ExchangeRateCurrencyGrabberInfo extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'grab_banks_currency';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['bank_id', 'currency_id'], 'required'],
            [['bank_id', 'currency_id', 'sale_tr_idx', 'sale_td_idx', 'buy_tr_idx', 'buy_td_idx', 'check_tr_idx', 'check_td_idx'], 'integer'],
            [['currency_multiplier'], 'number'],
            [['sale_tr_selector', 'sale_td_selector', 'buy_tr_selector', 'buy_td_selector', 'check_tr_selector', 'check_td_selector'], 'string', 'max' => 256]
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
            'currency_multiplier' => 'Currency Multiplier',
            'sale_tr_selector' => 'Sale Tr Selector',
            'sale_tr_idx' => 'Sale Tr Idx',
            'sale_td_selector' => 'Sale Td Selector',
            'sale_td_idx' => 'Sale Td Idx',
            'buy_tr_selector' => 'Buy Tr Selector',
            'buy_tr_idx' => 'Buy Tr Idx',
            'buy_td_selector' => 'Buy Td Selector',
            'buy_td_idx' => 'Buy Td Idx',
            'check_tr_selector' => 'Check Tr Selector',
            'check_tr_idx' => 'Check Tr Idx',
            'check_td_selector' => 'Check Td Selector',
            'check_td_idx' => 'Check Td Idx',
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
        return $this->hasOne(Banks::className(), ['id' => 'bank_id']);
    }
}
