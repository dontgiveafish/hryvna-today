<?php

use yii\db\Schema;
use yii\db\Migration;

class m200314_115243_oshadrate_again extends Migration
{
    protected $table = 'grabber_strategy_currency';
    protected $strategy = 4;

    public function up()
    {
        $this->update($this->table, ['currency_multiplier' => 1], ['currency_id' => 840, 'strategy_id' => $this->strategy]);
        $this->update($this->table, ['currency_multiplier' => 1], ['currency_id' => 978, 'strategy_id' => $this->strategy]);
        $this->update($this->table, ['currency_multiplier' => 1], ['currency_id' => 643, 'strategy_id' => $this->strategy]);
    }

    public function down()
    {
        $this->update($this->table, ['currency_multiplier' => 10], ['currency_id' => 840, 'strategy_id' => $this->strategy]);
        $this->update($this->table, ['currency_multiplier' => 10], ['currency_id' => 978, 'strategy_id' => $this->strategy]);
        $this->update($this->table, ['currency_multiplier' => .1], ['currency_id' => 643, 'strategy_id' => $this->strategy]);
    }
}
