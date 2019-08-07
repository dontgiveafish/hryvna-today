<?php

use yii\db\Schema;
use yii\db\Migration;

class m190807_125905_change_aval_ex_site extends Migration
{
    protected $table = 'grabber_strategy_info';
    protected $bank = 'Aval';

    public function up()
    {
        $url = 'http://ex.aval.ua/personal/everyday/exchange/exchange/';
        $this->update($this->table, ['url' => $url], ['name' => $this->bank]);
    }

    public function down()
    {
        $url = 'http://aval.ua/personal/everyday/exchange/exchange/';
        $this->update($this->table, ['url' => $url], ['name' => $this->bank]);
    }
}
