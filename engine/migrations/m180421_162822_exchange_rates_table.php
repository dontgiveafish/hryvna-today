<?php

use yii\db\Schema;
use yii\db\Migration;

class m180421_162822_exchange_rates_table extends Migration
{
    private $table = 'exchange_rates';

    public function up()
    {
        $this->createTable($this->table, [
            'id' => $this->primaryKey(),
            'bank_id' => $this->integer()->notNull(),
            'currency_id' => $this->integer()->notNull(),
            'buy' => $this->decimal(10, 5)->notNull(),
            'sale' => $this->decimal(10, 5)->notNull(),
            'grab_date' => $this->date()->notNull(),
        ]);
    }

    public function down()
    {
        $this->dropTable($this->table);
    }
}
