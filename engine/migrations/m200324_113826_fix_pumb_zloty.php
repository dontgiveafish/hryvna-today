<?php

use yii\db\Schema;
use yii\db\Migration;

class m200324_113826_fix_pumb_zloty extends Migration
{
    protected $table = 'grabber_strategy_currency';
    protected $strategy = 13;

    public function up()
    {
        $this->update($this->table, ['currency_id' => 985], ['currency_id' => 756, 'strategy_id' => $this->strategy]);
    }

    public function down()
    {
        $this->update($this->table, ['currency_id' => 756], ['currency_id' => 985, 'strategy_id' => $this->strategy]);
    }
}
