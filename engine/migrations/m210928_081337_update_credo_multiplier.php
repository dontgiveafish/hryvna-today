<?php

use yii\db\Schema;
use yii\db\Migration;

class m210928_081337_update_credo_multiplier extends Migration
{
    protected $table = 'grabber_strategy_currency';
    protected $strategy = 8;

    public function up()
    {
        $this->update($this->table, ['currency_multiplier' => 1], ['strategy_id' => $this->strategy]);
    }

    public function down()
    {
        $this->update($this->table, ['currency_multiplier' => 0.01], ['strategy_id' => $this->strategy]);
    }
}
