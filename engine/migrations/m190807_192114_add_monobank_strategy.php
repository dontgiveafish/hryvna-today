<?php

use yii\db\Schema;
use yii\db\Migration;

class m190807_192114_add_monobank_strategy extends Migration
{
    private $table_banks = 'bank_list';
    private $table_strategies = 'grabber_strategy_info';

    public function up()
    {
        $this->insert($this->table_banks, [
            'id' => 18, 'type_id' => 2, 'title' => 'Монобанк', 'rate' => 0
        ]);

        $this->insert($this->table_strategies, [
            'bank_id' => 18, 'name' => 'Mono', 'url' => 'https://api.monobank.ua/bank/currency'
        ]);
    }

    public function down()
    {
        $this->delete($this->table_banks, ['id' => 18]);
        $this->delete($this->table_strategies, ['bank_id' => 18]);
    }
}
