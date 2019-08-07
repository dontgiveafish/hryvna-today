<?php

use yii\db\Schema;
use yii\db\Migration;

class m190807_195107_change_monobank_rate extends Migration
{
    private $table_banks = 'bank_list';
    private $aval = 2;
    private $mono = 18;

    public function up()
    {
        $this->update($this->table_banks, ['rate' => 0], ['id' => $this->aval]);
        $this->update($this->table_banks, ['rate' => 3], ['id' => $this->mono]);
    }

    public function down()
    {
        $this->update($this->table_banks, ['rate' => 3], ['id' => $this->aval]);
        $this->update($this->table_banks, ['rate' => 0], ['id' => $this->mono]);
    }
}
