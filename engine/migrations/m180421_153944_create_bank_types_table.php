<?php

use yii\db\Schema;
use yii\db\Migration;

class m180421_153944_create_bank_types_table extends Migration
{
    private $table = 'bank_types';

    public function up()
    {
        $this->createTable($this->table, [
            'id' => $this->primaryKey(),
            'alias' => $this->string()->notNull(),
            'title' => $this->string()->notNull(),
            'rate' => $this->integer()->defaultValue(0),
        ]);

        $this->batchInsert(
            $this->table,
            ['id', 'alias', 'title', 'rate'],
            [
                [1, 'government', 'НБУ', 1],
                [2, 'commercial', 'Банки', 2],
                [3, 'interbank', 'Міжбанк', 3],
                [4, 'black', 'Міняйли', 4],
            ]
        );
    }

    public function down()
    {
        $this->dropTable($this->table);
    }
}
