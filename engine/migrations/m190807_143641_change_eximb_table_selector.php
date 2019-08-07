<?php

use yii\db\Schema;
use yii\db\Migration;

class m190807_143641_change_eximb_table_selector extends Migration
{
    protected $table = 'grabber_strategy_info';
    protected $bank = 'Eximb';

    public function up()
    {
        $url = 'https://www.eximb.com/ua/business/pryvatnym-klientam/pryvatnym-klientam-inshi-poslugy/obmin-valyut/kursy-valyut.html';
        $cs = 'table.styled-table';
        $this->update($this->table, ['url' => $url, 'cells_selector' => $cs], ['name' => $this->bank]);
    }

    public function down()
    {
        $url = 'https://www.eximb.com/ukr/personal/everyday/currency_exchange/';
        $cs = '.table_1';
        $this->update($this->table, ['url' => $url, 'cells_selector' => $cs], ['name' => $this->bank]);
    }
}
