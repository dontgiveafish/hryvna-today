<?php

use yii\db\Schema;
use yii\db\Migration;

class m200324_194009_prepare_to_eximb_api extends Migration
{
    protected $table = 'grabber_strategy_info';
    protected $bank = 'Eximb';

    public function up()
    {
        $columns = [
            'url' => 'https://www.eximb.com/services/v1/rates/',
            'cells_selector' => null,
            'cells_idx' => null
        ];

        $this->update($this->table, $columns, ['name' => $this->bank]);
    }

    public function down()
    {
        $columns = [
            'url' => 'https://www.eximb.com/ua/business/pryvatnym-klientam/pryvatnym-klientam-inshi-poslugy/obmin-valyut/kursy-valyut.html',
            'cells_selector' => 'table.styled-table',
            'cells_idx' => 0
        ];

        $this->update($this->table, $columns, ['name' => $this->bank]);
    }
}
