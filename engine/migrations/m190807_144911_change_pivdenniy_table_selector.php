<?php

use yii\db\Schema;
use yii\db\Migration;

class m190807_144911_change_pivdenniy_table_selector extends Migration
{
    protected $table = 'grabber_strategy_info';
    protected $bank = 'Pivdenniy';

    public function up()
    {
        $url = 'https://bank.com.ua/api/uk/v1/rest-ui/find-branch-course';
        $cs = null;
        $this->update($this->table, ['url' => $url, 'cells_selector' => $cs], ['name' => $this->bank]);
    }

    public function down()
    {
        $url = 'http://bank.com.ua/ua/rates/';
        $cs = '.content table';
        $this->update($this->table, ['url' => $url, 'cells_selector' => $cs], ['name' => $this->bank]);
    }
}
