<?php

use yii\db\Schema;
use yii\db\Migration;

class m180421_162020_create_currency_table extends Migration
{
    private $table = 'currency';

    public function up()
    {
        $this->createTable($this->table, [
            'id' => $this->primaryKey(),
            'code' => $this->string()->notNull(),
            'title' => $this->string()->notNull(),
            'verbal' => $this->string()->notNull(),
            'symbol' => $this->string()->notNull(),
        ]);

        $this->batchInsert(
            $this->table,
            ['id', 'code', 'title', 'verbal', 'symbol'],
            [
                [124, 'CAD', 'Канадський долар', 'канадійський долар', 'C$'],
                [392, 'JPY', 'Японська єна', 'єна', '¥'],
                [643, 'RUB', 'Російський рубль', 'рубль', '₽'],
                [756, 'CHF', 'Швейцарський франк', 'франк', '₣'],
                [826, 'GBP', 'Англійський фунт стерлінгів', 'фунт', '£'],
                [840, 'USD', 'Долар США', 'долар', '$'],
                [978, 'EUR', 'Євро', 'євро', '€'],
                [980, 'UAH', 'Гривня', 'гривня', '₴'],
                [985, 'PLN', 'Польський злотий', 'злотий', 'zł']
            ]
        );
    }

    public function down()
    {
        $this->dropTable($this->table);
    }
}
