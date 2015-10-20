<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "exchanges".
 *
 * @property integer $id
 * @property integer $bank_id
 * @property string $dollar_buy
 * @property string $dollar_sale
 * @property string $euro_buy
 * @property string $euro_sale
 * @property string $grab_date
 * @property string $bank_time
 *
 * @property Banks $bank
 */
abstract class Exchange extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'exchanges_new';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['bank_id', 'dollar_buy', 'dollar_sale', 'euro_buy', 'euro_sale', 'grab_date', 'bank_time'], 'required'],
            [['bank_id'], 'integer'],
            [['dollar_buy', 'dollar_sale', 'euro_buy', 'euro_sale'], 'number'],
            [['grab_date', 'bank_time'], 'safe']
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
            'dollar_buy' => 'Dollar Buy',
            'dollar_sale' => 'Dollar Sale',
            'euro_buy' => 'Euro Buy',
            'euro_sale' => 'Euro Sale',
            'grab_date' => 'Grab Date',
            'bank_time' => 'Bank Time',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getBank()
    {
        return $this->hasOne(Banks::className(), ['id' => 'bank_id']);
    }
}
