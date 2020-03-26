<?php

use yii\db\Schema;
use yii\db\Migration;

class m200326_143250_switch_to_old_idea_site extends Migration
{
    protected $table = 'grabber_strategy_info';
    protected $bank = 'Idea';

    public function up()
    {
        $this->update($this->table, ['url' => 'http://old.ideabank.ua/'], ['name' => $this->bank]);
    }

    public function down()
    {
        $this->update($this->table, ['url' => 'http://www.ideabank.ua/'], ['name' => $this->bank]);
    }
}
