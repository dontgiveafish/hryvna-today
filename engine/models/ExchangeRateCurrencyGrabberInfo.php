<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "grabber_strategy_currency".
 *
 * @property integer $id
 * @property integer $strategy_id
 * @property integer $currency_id
 * @property string $currency_multiplier
 * @property string $buy_tr_selector
 * @property integer $buy_tr_idx
 * @property string $buy_td_selector
 * @property integer $buy_td_idx
 * @property string $sale_tr_selector
 * @property integer $sale_tr_idx
 * @property string $sale_td_selector
 * @property integer $sale_td_idx
 * @property string $check_tr_selector
 * @property integer $check_tr_idx
 * @property string $check_td_selector
 * @property integer $check_td_idx
 *
 * @property Currency $currency
 * @property ExchangeRateGrabberInfo $strategy
 */
class ExchangeRateCurrencyGrabberInfo extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'grabber_strategy_currency';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['strategy_id', 'currency_id'], 'required'],
            [['strategy_id', 'currency_id', 'buy_tr_idx', 'buy_td_idx', 'sale_tr_idx', 'sale_td_idx', 'check_tr_idx', 'check_td_idx'], 'integer'],
            [['currency_multiplier'], 'number'],
            [['buy_tr_selector', 'buy_td_selector', 'sale_tr_selector', 'sale_td_selector', 'check_tr_selector', 'check_td_selector'], 'string', 'max' => 256]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'strategy_id' => 'Strategy ID',
            'currency_id' => 'Currency ID',
            'currency_multiplier' => 'Currency Multiplier',
            'buy_tr_selector' => 'Buy Tr Selector',
            'buy_tr_idx' => 'Buy Tr Idx',
            'buy_td_selector' => 'Buy Td Selector',
            'buy_td_idx' => 'Buy Td Idx',
            'sale_tr_selector' => 'Sale Tr Selector',
            'sale_tr_idx' => 'Sale Tr Idx',
            'sale_td_selector' => 'Sale Td Selector',
            'sale_td_idx' => 'Sale Td Idx',
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
    public function getStrategy()
    {
        return $this->hasOne(ExchangeRateGrabberInfo::className(), ['id' => 'strategy_id']);
    }
}
