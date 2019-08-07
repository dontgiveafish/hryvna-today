<?php

use yii\db\Schema;
use yii\db\Migration;

class m190807_131548_change_oshad_table_selector extends Migration
{
    protected $table = 'grabber_strategy_info';
    protected $bank = 'Oschadny';

    public function up()
    {
        $cs = '#currency_date_result';
        $this->update($this->table, ['cells_selector' => $cs], ['name' => $this->bank]);
    }

    public function down()
    {
        $cs = 'table';
        $this->update($this->table, ['cells_selector' => $cs], ['name' => $this->bank]);
    }
}
