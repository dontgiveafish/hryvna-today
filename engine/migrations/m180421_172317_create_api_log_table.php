<?php

use yii\db\Schema;
use yii\db\Migration;

class m180421_172317_create_api_log_table extends Migration
{
    private $table = 'api_log';

    public function up()
    {
        $this->createTable($this->table, [
            'id' => $this->primaryKey(),
            'key_id' => $this->integer(),
            'ip' => $this->string(),
            'query' => $this->string(),
            'status' => $this->string(),
            'timestamp' => $this->timestamp(),
        ]);
    }

    public function down()
    {
        $this->dropTable($this->table);
    }
}
