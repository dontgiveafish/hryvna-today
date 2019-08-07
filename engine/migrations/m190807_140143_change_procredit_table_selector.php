<?php

use yii\db\Schema;
use yii\db\Migration;

class m190807_140143_change_procredit_table_selector extends Migration
{
    protected $table = 'grabber_strategy_info';
    protected $bank = 'Procredit';

    public function up()
    {
        $url = 'https://www.procreditbank.com.ua/currency-exchange-rates-cards/';
        $cs = '.currency table';
        $this->update($this->table, ['url' => $url, 'cells_selector' => $cs], ['name' => $this->bank]);
    }

    public function down()
    {
        $url = 'http://www.procreditbank.com.ua/private-individuals/credit-cards/archive-exchange-rates/';
        $cs = '#currenciesContainer table';
        $this->update($this->table, ['url' => $url, 'cells_selector' => $cs], ['name' => $this->bank]);
    }
}
