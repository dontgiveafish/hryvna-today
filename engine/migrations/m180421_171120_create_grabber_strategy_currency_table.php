<?php

use yii\db\Schema;
use yii\db\Migration;

class m180421_171120_create_grabber_strategy_currency_table extends Migration
{
    private $table = 'grabber_strategy_currency';

    public function up()
    {
        $columns = [
            'id' => $this->primaryKey(),
            'strategy_id' => $this->integer()->notNull(),
            'currency_id' => $this->integer()->notNull(),
            'currency_multiplier' => $this->decimal(10, 5),
            'buy_tr_selector' => $this->string(),
            'buy_tr_idx' => $this->integer(),
            'buy_td_selector' => $this->string(),
            'buy_td_idx' => $this->integer(),
            'sale_tr_selector' => $this->string(),
            'sale_tr_idx' => $this->integer(),
            'sale_td_selector' => $this->string(),
            'sale_td_idx' => $this->integer(),
            'check_tr_selector' => $this->string(),
            'check_tr_idx' => $this->integer(),
            'check_td_selector' => $this->string(),
            'check_td_idx' => $this->integer(),
        ];

        $this->createTable($this->table, $columns);
        $this->batchInsert($this->table, array_keys($columns), [
            [0, 14, 756, null, null, 4, null, 1, null, 4, null, 2, null, 4, null, 0],
            [3, 6, 840, null, '.currency', 0, 'div', 1, '.currency', 0, 'div', 2, '.currency', 0, 'div', 0],
            [4, 6, 978, null, '.currency', 1, 'div', 1, '.currency', 1, 'div', 2, '.currency', 1, 'div', 0],
            [5, 7, 840, null, null, 2, null, 1, null, 2, null, 2, null, 2, null, 0],
            [6, 7, 978, null, null, 3, null, 1, null, 3, null, 2, null, 3, null, 0],
            [7, 5, 840, null, null, 1, null, 2, null, 1, null, 3, null, 1, null, 0],
            [8, 5, 978, null, null, 2, null, 2, null, 2, null, 3, null, 2, null, 0],
            [9, 3, 840, null, '.currencyItem', 0, '.buy', 0, '.currencyItem', 0, '.sell', 0, '.currencyItem', 0, '.title', 0],
            [10, 3, 978, null, '.currencyItem', 1, '.buy', 0, '.currencyItem', 1, '.sell', 0, '.currencyItem', 1, '.title', 0],
            [11, 2, 840, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [12, 2, 978, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [13, 4, 840, 0.01000, null, 1, null, 5, null, 1, null, 6, null, 1, null, 0],
            [14, 4, 978, 0.01000, null, 2, null, 5, null, 2, null, 6, null, 2, null, 0],
            [15, 9, 840, null, null, 1, null, 1, null, 1, null, 2, null, 1, null, 0],
            [16, 9, 978, null, null, 3, null, 1, null, 3, null, 2, null, 3, null, 0],
            [19, 12, 840, null, null, 1, null, 1, null, 1, null, 2, null, 1, null, 0],
            [20, 12, 978, null, null, 2, null, 1, null, 2, null, 2, null, 2, null, 0],
            [21, 13, 840, null, null, 1, null, 1, null, 1, null, 2, null, 1, null, 0],
            [24, 13, 978, null, null, 2, null, 1, null, 2, null, 2, null, 2, null, 0],
            [25, 14, 840, null, null, 0, null, 1, null, 0, null, 2, null, 0, null, 0],
            [27, 16, 840, null, null, 1, null, 1, null, 1, null, 2, null, 1, null, 0],
            [28, 16, 978, null, null, 2, null, 1, null, 2, null, 2, null, 2, null, 0],
            [29, 18, 840, null, null, 1, null, 1, null, 1, null, 2, null, 1, null, 0],
            [30, 18, 978, null, null, 2, null, 1, null, 2, null, 2, null, 2, null, 0],
            [31, 10, 840, 0.01000, null, 6, null, 2, null, 6, null, 3, null, 6, null, 1],
            [32, 10, 643, 0.01000, null, 5, null, 2, null, 5, null, 3, null, 5, null, 1],
            [33, 19, 840, null, null, 2, null, 1, null, 2, null, 2, null, 2, null, 0],
            [34, 19, 978, null, null, 3, null, 1, null, 3, null, 2, null, 3, null, 0],
            [35, 2, 985, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [36, 2, 826, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [37, 2, 643, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [38, 8, 840, 0.01000, null, 3, null, 3, null, 3, null, 5, null, 3, null, 0],
            [39, 8, 978, 0.01000, null, 6, null, 3, null, 6, null, 5, null, 6, null, 0],
            [40, 8, 826, 0.01000, null, 2, null, 3, null, 2, null, 5, null, 2, null, 0],
            [41, 8, 985, 0.01000, null, 5, null, 3, null, 5, null, 5, null, 5, null, 0],
            [43, 17, 840, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [44, 17, 978, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [45, 17, 643, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [46, 1, 840, null, null, 1, null, 1, null, 1, null, 2, null, 1, null, 0],
            [47, 1, 978, null, null, 2, null, 1, null, 2, null, 2, null, 2, null, 0],
            [48, 1, 826, null, null, 4, null, 1, null, 4, null, 2, null, 4, null, 0],
            [49, 1, 643, null, null, 3, null, 1, null, 3, null, 2, null, 3, null, 0],
            [50, 1, 756, null, null, 5, null, 1, null, 5, null, 2, null, 5, null, 0],
            [51, 2, 756, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [52, 3, 826, null, '.currencyItem', 2, '.buy', 0, '.currencyItem', 2, '.sell', 0, '.currencyItem', 2, '.title', 0],
            [53, 3, 985, null, '.currencyItem', 3, '.buy', 0, '.currencyItem', 3, '.sell', 0, '.currencyItem', 3, '.title', 0],
            [54, 3, 643, null, '.currencyItem', 4, '.buy', 0, '.currencyItem', 4, '.sell', 0, '.currencyItem', 4, '.title', 0],
            [55, 4, 643, 0.10000, null, 3, null, 5, null, 3, null, 6, null, 3, null, 0],
            [56, 5, 643, null, null, 3, null, 2, null, 3, null, 3, null, 3, null, 0],
            [57, 5, 826, null, null, 4, null, 2, null, 4, null, 3, null, 4, null, 0],
            [59, 5, 756, null, null, 5, null, 2, null, 5, null, 3, null, 5, null, 0],
            [60, 5, 124, null, null, 6, null, 2, null, 6, null, 3, null, 6, null, 0],
            [61, 5, 985, null, null, 13, null, 2, null, 13, null, 3, null, 13, null, 0],
            [62, 5, 392, null, null, 14, null, 2, null, 14, null, 3, null, 14, null, 0],
            [63, 2, 124, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [64, 2, 392, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [65, 6, 643, null, '.currency', 2, 'div', 1, '.currency', 2, 'div', 2, '.currency', 2, 'div', 0],
            [66, 6, 756, null, '.currency', 3, 'div', 1, '.currency', 3, 'div', 2, '.currency', 3, 'div', 0],
            [67, 6, 826, null, '.currency', 4, 'div', 1, '.currency', 4, 'div', 2, '.currency', 4, 'div', 0],
            [68, 6, 124, null, '.currency', 5, 'div', 1, '.currency', 5, 'div', 2, '.currency', 5, 'div', 0],
            [70, 6, 985, null, '.currency', 6, 'div', 1, '.currency', 6, 'div', 2, '.currency', 6, 'div', 0],
            [71, 8, 124, 0.01000, null, 4, null, 3, null, 4, null, 5, null, 4, null, 0],
            [72, 9, 756, null, null, 5, null, 1, null, 5, null, 2, null, 5, null, 0],
            [73, 10, 756, 0.01000, null, 1, null, 2, null, 1, null, 3, null, 1, null, 1],
            [74, 10, 826, 0.01000, null, 3, null, 2, null, 3, null, 3, null, 3, null, 1],
            [75, 10, 978, 0.01000, null, 2, null, 2, null, 2, null, 3, null, 2, null, 1],
            [76, 11, 840, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [77, 11, 978, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [80, 11, 643, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [86, 13, 643, null, null, 3, null, 1, null, 3, null, 2, null, 3, null, 0],
            [87, 13, 826, null, null, 4, null, 1, null, 4, null, 2, null, 4, null, 0],
            [88, 13, 756, null, null, 5, null, 1, null, 5, null, 2, null, 5, null, 0],
            [89, 14, 643, null, null, 2, null, 1, null, 2, null, 2, null, 2, null, 0],
            [90, 14, 826, null, null, 3, null, 1, null, 3, null, 2, null, 3, null, 0],
            [91, 14, 978, null, null, 1, null, 1, null, 1, null, 2, null, 1, null, 0],
            [92, 16, 643, null, null, 3, null, 1, null, 3, null, 2, null, 3, null, 0],
            [93, 18, 643, null, null, 3, null, 1, null, 3, null, 2, null, 3, null, 0],
            [94, 19, 643, null, null, 4, null, 1, null, 4, null, 2, null, 4, null, 0],
            [95, 7, 643, null, null, 4, null, 1, null, 4, null, 2, null, 4, null, 0],
        ]);
    }

    public function down()
    {
        $this->dropTable($this->table);
    }
}
