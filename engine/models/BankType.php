<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "bank_types".
 *
 * @property string $id
 * @property string $alias
 * @property string $title
 * @property string $rate
 */
class BankType extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'bank_types';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['alias', 'title'], 'required'],
            [['rate'], 'integer'],
            [['alias', 'title'], 'string', 'max' => 128],
            [['alias'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'alias' => 'Alias',
            'title' => 'Title',
            'rate' => 'Rate',
        ];
    }
}
