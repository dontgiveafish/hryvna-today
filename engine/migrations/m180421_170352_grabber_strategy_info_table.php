<?php

use yii\db\Schema;
use yii\db\Migration;

class m180421_170352_grabber_strategy_info_table extends Migration
{
    private $table = 'grabber_strategy_info';

    public function up()
    {
        $this->createTable($this->table, [
            'id' => $this->primaryKey(),
            'bank_id' => $this->integer(),
            'name' => $this->string()->notNull(),
            'url' => $this->string(),
            'cells_selector' => $this->string(),
            'cells_idx' => $this->integer(),
        ]);

        $this->batchInsert(
            $this->table,
            ['id', 'bank_id', 'name', 'url', 'cells_selector', 'cells_idx'],
            [
                [1, 2, 'Aval', 'http://aval.ua/personal/everyday/exchange/exchange/', 'div.body-currency-block-rba table.body-currency', 0],
                [2, 1, 'Nbu', 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange', null, null],
                [3, 11, 'Idea', 'http://www.ideabank.ua/', '.currencyBox', 0],
                [4, 5, 'Oschadny', 'http://www.oschadbank.ua/ua/private/currency/', 'table', 0],
                [5, 9, 'Eximb', 'https://www.eximb.com/ukr/personal/everyday/currency_exchange/', '.table_1', 0],
                [6, 6, 'Creditagricole', 'https://credit-agricole.ua/kurs-valyut', '.exchange-rates-table', 0],
                [7, 4, 'Creditdnepr', 'https://creditdnepr.com.ua/currency', '.site-content table.table-s1', 0],
                [8, 8, 'Kredo', 'http://www.kredobank.com.ua/exchange_rates/ex_bank/', 'table.ourTable', 0],
                [9, 10, 'Otp', 'http://www.otpbank.com.ua/', '.currency-rates table', 0],
                [10, 14, 'Pivdenniy', 'http://bank.com.ua/ua/rates/', '.content table', 0],
                [11, 3, 'Privat', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', null, null],
                [12, 12, 'Procredit', 'http://www.procreditbank.com.ua/private-individuals/credit-cards/archive-exchange-rates/', '#currenciesContainer table', 0],
                [13, 13, 'Pumb', 'https://pumb.ua', '.exchange-rate table', 0],
                [14, 7, 'Ukrsib', 'https://my.ukrsibbank.com/ua/personal/operations/currency_exchange/', 'table.currency__table', 0],
                [15, 16, 'Black', null, null, null],
                [16, null, 'Finance', 'http://finance.i.ua/', '.Right .local_table', 0],
                [17, null, 'Minfin', 'http://minfin.com.ua/currency/auction/%CURRENCY%/buy/all/', '.au-status .au-status--group', 0],
                [18, null, 'Telegraf', 'http://telegraf.com.ua/kurs-valute/', '.kurs-block .right table.kurs-table', 0],
                [19, 17, 'Mizhbank', 'https://finance.ua/ru/currency', 'table.table-layout-ukrdealing', 0],
            ]
        );
    }

    public function down()
    {
        $this->dropTable($this->table);
    }
}
