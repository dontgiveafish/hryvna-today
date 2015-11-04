<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "currency".
 *
 * @property integer $id
 * @property string $code
 * @property string $title
 * @property string $symbol
 */
class Currency extends \yii\db\ActiveRecord
{
    
    const DOLLAR_ID = 840;
    const EURO_ID = 978;
    
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
            [['id', 'code', 'title', 'symbol'], 'required'],
            [['id'], 'integer'],
            [['code'], 'string', 'max' => 5],
            [['title', 'symbol'], 'string', 'max' => 128]
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
            'symbol' => 'Symbol',
        ];
    }
}
