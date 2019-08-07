<?php

use yii\db\Schema;
use yii\db\Migration;

class m190807_151217_change_pivdenniy_grabber_currencies extends Migration
{
    protected $table = 'grabber_strategy_currency';
    protected $strategy = 10;

    public function up()
    {
        $this->delete($this->table, ['strategy_id' => $this->strategy]);
    }

    public function down()
    {
        $columns = [
            'id',
            'strategy_id',
            'currency_id',
            'currency_multiplier',
            'buy_tr_selector',
            'buy_tr_idx',
            'buy_td_selector',
            'buy_td_idx',
            'sale_tr_selector',
            'sale_tr_idx',
            'sale_td_selector',
            'sale_td_idx',
            'check_tr_selector',
            'check_tr_idx',
            'check_td_selector',
            'check_td_idx',
        ];

        $this->batchInsert($this->table, $columns, [
            [31, 10, 840, 0.01000, null, 6, null, 2, null, 6, null, 3, null, 6, null, 1],
            [32, 10, 643, 0.01000, null, 5, null, 2, null, 5, null, 3, null, 5, null, 1],
            [73, 10, 756, 0.01000, null, 1, null, 2, null, 1, null, 3, null, 1, null, 1],
            [74, 10, 826, 0.01000, null, 3, null, 2, null, 3, null, 3, null, 3, null, 1],
            [75, 10, 978, 0.01000, null, 2, null, 2, null, 2, null, 3, null, 2, null, 1],
        ]);
    }
}
