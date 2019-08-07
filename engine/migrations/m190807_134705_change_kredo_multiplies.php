<?php

use yii\db\Schema;
use yii\db\Migration;

class m190807_134705_change_kredo_multiplies extends Migration
{
    protected $table = 'grabber_strategy_currency';
    protected $strategy = 8;

    public function up()
    {
        $this->update($this->table, ['buy_tr_idx' => 1,  'buy_td_idx' => 3,  'sale_tr_idx' => 1,  'sale_td_idx' => 2,  'check_tr_idx' => 1], ['currency_id' => 840, 'strategy_id' => $this->strategy]);
        $this->update($this->table, ['buy_tr_idx' => 2,  'buy_td_idx' => 3,  'sale_tr_idx' => 2,  'sale_td_idx' => 2,  'check_tr_idx' => 2], ['currency_id' => 978, 'strategy_id' => $this->strategy]);
        $this->update($this->table, ['buy_tr_idx' => 4,  'buy_td_idx' => 3,  'sale_tr_idx' => 4,  'sale_td_idx' => 2,  'check_tr_idx' => 4], ['currency_id' => 826, 'strategy_id' => $this->strategy]);
        $this->update($this->table, ['buy_tr_idx' => 3,  'buy_td_idx' => 3,  'sale_tr_idx' => 3,  'sale_td_idx' => 2,  'check_tr_idx' => 3], ['currency_id' => 985, 'strategy_id' => $this->strategy]);
        $this->update($this->table, ['buy_tr_idx' => 5,  'buy_td_idx' => 3,  'sale_tr_idx' => 5,  'sale_td_idx' => 2,  'check_tr_idx' => 5], ['currency_id' => 124, 'strategy_id' => $this->strategy]);
    }

    public function down()
    {
        $this->update($this->table, ['buy_tr_idx' => 3,  'buy_td_idx' => 3,  'sale_tr_idx' => 3,  'sale_td_idx' => 5,  'check_tr_idx' => 0], ['currency_id' => 840, 'strategy_id' => $this->strategy]);
        $this->update($this->table, ['buy_tr_idx' => 6,  'buy_td_idx' => 3,  'sale_tr_idx' => 6,  'sale_td_idx' => 5,  'check_tr_idx' => 0], ['currency_id' => 978, 'strategy_id' => $this->strategy]);
        $this->update($this->table, ['buy_tr_idx' => 2,  'buy_td_idx' => 3,  'sale_tr_idx' => 2,  'sale_td_idx' => 5,  'check_tr_idx' => 0], ['currency_id' => 826, 'strategy_id' => $this->strategy]);
        $this->update($this->table, ['buy_tr_idx' => 5,  'buy_td_idx' => 3,  'sale_tr_idx' => 5,  'sale_td_idx' => 5,  'check_tr_idx' => 0], ['currency_id' => 985, 'strategy_id' => $this->strategy]);
        $this->update($this->table, ['buy_tr_idx' => 4,  'buy_td_idx' => 3,  'sale_tr_idx' => 4,  'sale_td_idx' => 5,  'check_tr_idx' => 0], ['currency_id' => 124, 'strategy_id' => $this->strategy]);
    }
}
