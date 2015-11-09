<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "grab_strategies".
 *
 * @property integer $id
 * @property integer $bank_id
 * @property string $name
 * @property string $url
 * @property string $cells_selector
 * @property integer $cells_idx
 *
 * @property Banks $bank
 */
class ExchangeRateGrabberInfo extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'grab_banks';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['bank_id', 'name'], 'required'],
            [['bank_id', 'cells_idx'], 'integer'],
            [['name'], 'string', 'max' => 64],
            [['url', 'cells_selector'], 'string', 'max' => 256],
            [['bank_id'], 'unique'],
            [['name'], 'unique']
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
    public function getBank()
    {
        return $this->hasOne(Banks::className(), ['id' => 'bank_id']);
    }
}
