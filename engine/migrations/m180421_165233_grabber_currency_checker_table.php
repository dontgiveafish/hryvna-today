<?php

use yii\db\Schema;
use yii\db\Migration;

class m180421_165233_grabber_currency_checker_table extends Migration
{
    private $table = 'grabber_currency_checker';

    public function up()
    {
        $this->createTable($this->table, [
            'id' => $this->primaryKey(),
            'currency_id' => $this->integer()->notNull(),
            'value' => $this->string()->notNull(),
        ]);

        $this->batchInsert(
            $this->table,
            ['id', 'currency_id', 'value'],
            [
                [1, 978, '&euro;'],
                [2, 643, 'RUR'],
                [3, 840, 'Долари США'],
                [4, 978, '€вро'],
                [5, 826, 'Англійськіфунтистерлінгів'],
                [6, 643, 'Рублі'],
                [7, 756, 'Швейцарськіфранки'],
                [8, 985, 'PLZ'],
            ]
        );
    }

    public function down()
    {
        $this->dropTable($this->table);
    }
}
