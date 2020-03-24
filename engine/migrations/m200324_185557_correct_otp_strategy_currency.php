<?php

use yii\db\Schema;
use yii\db\Migration;

class m200324_185557_correct_otp_strategy_currency extends Migration
{
    protected $table = 'grabber_strategy_currency';
    protected $strategy = 9;

    public function up()
    {
        $this->update($this->table, ['buy_tr_idx' => 1,  'sale_tr_idx' => 1,  'check_tr_idx' => 1], ['currency_id' => 840, 'strategy_id' => $this->strategy]);
        $this->update($this->table, ['buy_tr_idx' => 2,  'sale_tr_idx' => 2,  'check_tr_idx' => 2], ['currency_id' => 978, 'strategy_id' => $this->strategy]);
        $this->update($this->table, ['buy_tr_idx' => 3,  'sale_tr_idx' => 3,  'check_tr_idx' => 3], ['currency_id' => 756, 'strategy_id' => $this->strategy]);
    }

    public function down()
    {
        $this->update($this->table, ['buy_tr_idx' => 1,  'sale_tr_idx' => 1,  'check_tr_idx' => 1], ['currency_id' => 840, 'strategy_id' => $this->strategy]);
        $this->update($this->table, ['buy_tr_idx' => 3,  'sale_tr_idx' => 3,  'check_tr_idx' => 3], ['currency_id' => 978, 'strategy_id' => $this->strategy]);
        $this->update($this->table, ['buy_tr_idx' => 5,  'sale_tr_idx' => 5,  'check_tr_idx' => 5], ['currency_id' => 756, 'strategy_id' => $this->strategy]);
    }
}
