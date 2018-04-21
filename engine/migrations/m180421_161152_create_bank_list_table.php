<?php

use yii\db\Schema;
use yii\db\Migration;

class m180421_161152_create_bank_list_table extends Migration
{
    private $table = 'bank_list';

    public function up()
    {
        $this->createTable($this->table, [
            'id' => $this->primaryKey(),
            'type_id' => $this->integer()->notNull(),
            'title' => $this->string()->notNull(),
            'rate' => $this->integer()->defaultValue(0),
        ]);

        $this->batchInsert(
            $this->table,
            ['id', 'type_id', 'title', 'rate'],
            [
                [1, 1, 'Національний банк України', 1],
                [2, 2, 'Райффайзен Банк Аваль', 3],
                [3, 2, 'ПриватБанк', 2],
                [4, 2, 'Кредит Дніпро', 0],
                [5, 2, 'Ощадбанк', 0],
                [6, 2, 'Креді Агріколь Банк', 0],
                [7, 2, 'УкрСиббанк', 0],
                [8, 2, 'Кредобанк', 0],
                [9, 2, 'Укрексімбанк', 0],
                [10, 2, 'ОТП Банк', 0],
                [11, 2, 'Ідея Банк', 0],
                [12, 2, 'ПроКредит Банк', 0],
                [13, 2, 'ПУМБ', 0],
                [14, 2, 'Банк Південний', 0],
                [16, 4, 'Чорний ринок', 5],
                [17, 3, 'Міжбанк', 4],
            ]
        );
    }

    public function down()
    {
        $this->dropTable($this->table);
    }
}
