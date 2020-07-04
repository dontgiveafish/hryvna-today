<?php

use yii\db\Schema;
use yii\db\Migration;

class m200106_160229_cleanup_api_tables extends Migration
{
    private $tableApiKeys = 'api_keys';
    private $tableApiLogs = 'api_log';

    public function up()
    {
        $this->dropTable($this->tableApiLogs);
        $this->dropTable($this->tableApiKeys);
    }

    public function down()
    {
        $this->createTable($this->tableApiKeys, [
            'id' => $this->primaryKey(),
            'key' => $this->string()->notNull(),
            'status' => "ENUM('enabled', 'disabled')",
            'comment' => $this->string(),
        ]);

        $this->createTable($this->table, [
            'id' => $this->primaryKey(),
            'key_id' => $this->integer(),
            'ip' => $this->string(),
            'query' => $this->string(),
            'status' => $this->string(),
            'timestamp' => $this->timestamp(),
        ]);
    }
}
