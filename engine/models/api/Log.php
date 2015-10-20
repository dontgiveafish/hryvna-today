<?php

namespace app\models\api;

use Yii;

/**
 * This is the model class for table "api_log".
 *
 * @property integer $id
 * @property integer $key_id
 * @property string $ip
 * @property string $query
 * @property string $status
 * @property string $timestamp
 *
 * @property ApiKeys $key
 */
class Log extends \yii\db\ActiveRecord
{
    
    const STATUS_SUCCESS = 'success';
    const STATUS_ERROR = 'error';
    
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'api_log';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['key_id'], 'integer'],
            [['status'], 'required'],
            [['status'], 'string'],
            [['timestamp'], 'safe'],
            [['ip'], 'string', 'max' => 64],
            [['query'], 'string', 'max' => 256]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'key_id' => 'Key ID',
            'ip' => 'Ip',
            'query' => 'Query',
            'status' => 'Status',
            'timestamp' => 'Timestamp',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getKey()
    {
        return $this->hasOne(ApiKeys::className(), ['id' => 'key_id']);
    }
    
    public function __construct($config = array()) {
        
        $this->key_id = Yii::$app->user->getId();
        $this->ip = Yii::$app->getRequest()->getUserIP();
        $this->query = Yii::$app->getRequest()->getUrl();
        
        parent::__construct($config);
    }
}
