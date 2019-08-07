<?php

use yii\db\Schema;
use yii\db\Migration;

class m190807_132011_change_oshad_multiplies extends Migration
{
    protected $table = 'grabber_strategy_currency';
    protected $strategy = 4;

    public function up()
    {
        $this->update($this->table, ['currency_multiplier' => 10], ['currency_id' => 840, 'strategy_id' => $this->strategy]);
        $this->update($this->table, ['currency_multiplier' => 10], ['currency_id' => 978, 'strategy_id' => $this->strategy]);
        $this->update($this->table, ['currency_multiplier' => .1], ['currency_id' => 643, 'strategy_id' => $this->strategy]);
    }

    public function down()
    {
        $this->update($this->table, ['currency_multiplier' => .01], ['currency_id' => 840, 'strategy_id' => $this->strategy]);
        $this->update($this->table, ['currency_multiplier' => .01], ['currency_id' => 978, 'strategy_id' => $this->strategy]);
        $this->update($this->table, ['currency_multiplier' => 0.1], ['currency_id' => 643, 'strategy_id' => $this->strategy]);
    }
}
