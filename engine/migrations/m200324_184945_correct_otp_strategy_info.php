<?php

use yii\db\Schema;
use yii\db\Migration;

class m200324_184945_correct_otp_strategy_info extends Migration
{
    protected $table = 'grabber_strategy_info';
    protected $bank = 'Otp';

    public function up()
    {
        $this->update($this->table, ['cells_selector' => '#c-otp table'], ['name' => $this->bank]);
    }

    public function down()
    {
        $this->update($this->table, ['cells_selector' => '.currency-rates table'], ['name' => $this->bank]);
    }
}
