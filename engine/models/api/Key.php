<?php

namespace app\models\api;

/**
 * This is the model class for table "api_keys".
 *
 * @property integer $id
 * @property string $key
 * @property string $status
 * @property string $comment
 *
 * @property ApiLog[] $apiLogs
 */
class Key extends \yii\db\ActiveRecord implements IdentityInterface
{
    
    const STATUS_ENABLED = 'enabled';
    const STATUS_DISABLED = 'disabled';
    
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'api_keys';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['key', 'required'],
            [['status', 'comment'], 'string'],
            ['status', 'in', 'range' => ['enabled', 'disabled']],
            [['key', 'comment'], 'string', 'max' => 256]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'key' => 'Key',
            'status' => 'Status',
            'comment' => 'Comment',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getApiLogs()
    {
        return $this->hasMany(ApiLog::className(), ['key_id' => 'id']);
    }

//    public static function findIdentity($id)
//    {
//        return static::findOne(['id' => $id, 'status' => self::STATUS_ENABLED]);
//    }
    
    public static function findIdentityByAccessToken($token, $type = null) {
        return static::findOne(['key' => $token, 'status' => self::STATUS_ENABLED]);
    }
    
    public static function findIdentity($id)
    {
        return static::findOne($id);
    }

    public function getId()
    {
        return $this->id;
    }

    public function getAuthKey()
    {
        return $this->key;
    }

    public function validateAuthKey($authKey)
    {
        return $this->key === $authKey;
    }
 
}
