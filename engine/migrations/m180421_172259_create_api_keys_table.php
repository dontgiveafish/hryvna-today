<?php

use yii\db\Schema;
use yii\db\Migration;

class m180421_172259_create_api_keys_table extends Migration
{
    private $table = 'api_keys';

    public function up()
    {
        $this->createTable($this->table, [
            'id' => $this->primaryKey(),
            'key' => $this->string()->notNull(),
            'status' => "ENUM('enabled', 'disabled')",
            'comment' => $this->string(),
        ]);
    }

    public function down()
    {
        $this->dropTable($this->table);
    }
}
