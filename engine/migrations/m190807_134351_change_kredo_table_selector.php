<?php

use yii\db\Schema;
use yii\db\Migration;

class m190807_134351_change_kredo_table_selector extends Migration
{
    protected $table = 'grabber_strategy_info';
    protected $bank = 'Kredo';

    public function up()
    {
        $url = 'https://kredobank.com.ua/info/kursy-valyut/commercial';
        $cs = '.table-striped_special table';
        $this->update($this->table, ['url' => $url, 'cells_selector' => $cs], ['name' => $this->bank]);
    }

    public function down()
    {
        $url = 'http://www.kredobank.com.ua/exchange_rates/ex_bank/';
        $cs = 'table.ourTable';
        $this->update($this->table, ['url' => $url, 'cells_selector' => $cs], ['name' => $this->bank]);
    }
}
