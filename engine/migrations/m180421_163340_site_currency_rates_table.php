<?php

use yii\db\Schema;
use yii\db\Migration;

class m180421_163340_site_currency_rates_table extends Migration
{
    private $table = 'site_currency_rates';

    public function up()
    {
        $this->createTable($this->table, [
            'id' => $this->primaryKey(),
            'currency_id' => $this->integer()->notNull(),
            'rate' => $this->integer()->defaultValue(0),
        ]);

        $this->batchInsert(
            $this->table,
            ['id', 'currency_id', 'rate'],
            [
                [1, 840, 1],
                [2, 978, 2],
            ]
        );
    }

    public function down()
    {
        $this->dropTable($this->table);
    }
}
