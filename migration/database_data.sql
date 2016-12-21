-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Час створення: Гру 21 2016 р., 02:01
-- Версія сервера: 5.5.53-0ubuntu0.14.04.1
-- Версія PHP: 5.5.9-1ubuntu4.20

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- База даних: `hryvna`
--

--
-- Дамп даних таблиці `bank_list`
--

INSERT INTO `bank_list` (`id`, `type_id`, `title`, `rate`) VALUES
  (1, 1, 'Національний банк України', 1),
  (2, 2, 'Райффайзен Банк Аваль', 3),
  (3, 2, 'ПриватБанк', 2),
  (4, 2, 'Кредит Дніпро', 0),
  (5, 2, 'Ощадбанк', 0),
  (6, 2, 'Креді Агріколь Банк', 0),
  (7, 2, 'УкрСиббанк', 0),
  (8, 2, 'Кредобанк', 0),
  (9, 2, 'Укрексімбанк', 0),
  (10, 2, 'ОТП Банк', 0),
  (11, 2, 'Ідея Банк', 0),
  (12, 2, 'ПроКредит Банк', 0),
  (13, 2, 'ПУМБ', 0),
  (14, 2, 'Банк Південний', 0),
  (16, 4, 'Чорний ринок', 5),
  (17, 3, 'Міжбанк', 4);

--
-- Дамп даних таблиці `bank_types`
--

INSERT INTO `bank_types` (`id`, `alias`, `title`, `rate`) VALUES
  (1, 'government', 'НБУ', 1),
  (2, 'commercial', 'Банки', 2),
  (3, 'interbank', 'Міжбанк', 3),
  (4, 'black', 'Міняйли', 4);

--
-- Дамп даних таблиці `currency`
--

INSERT INTO `currency` (`id`, `code`, `title`, `verbal`, `symbol`) VALUES
  (124, 'CAD', 'Канадський долар', 'канадійський долар', 'C$'),
  (392, 'JPY', 'Японська єна', 'єна', '¥'),
  (643, 'RUB', 'Російський рубль', 'рубль', '₽'),
  (756, 'CHF', 'Швейцарський франк', 'франк', '₣'),
  (826, 'GBP', 'Англійський фунт стерлінгів', 'фунт', '£'),
  (840, 'USD', 'Долар США', 'долар', '$'),
  (978, 'EUR', 'Євро', 'євро', '€'),
  (980, 'UAH', 'Гривня', 'гривня', '₴'),
  (985, 'PLN', 'Польський злотий', 'злотий', 'zł');

--
-- Дамп даних таблиці `grabber_currency_checker`
--

INSERT INTO `grabber_currency_checker` (`id`, `currency_id`, `value`) VALUES
  (1, 978, '&euro;'),
  (2, 643, 'RUR'),
  (3, 840, 'Долари США'),
  (4, 978, '€вро'),
  (5, 826, 'Англійськіфунтистерлінгів'),
  (6, 643, 'Рублі'),
  (7, 756, 'Швейцарськіфранки'),
  (8, 985, 'PLZ');

--
-- Дамп даних таблиці `grabber_strategy_currency`
--

INSERT INTO `grabber_strategy_currency` (`id`, `strategy_id`, `currency_id`, `currency_multiplier`, `buy_tr_selector`, `buy_tr_idx`, `buy_td_selector`, `buy_td_idx`, `sale_tr_selector`, `sale_tr_idx`, `sale_td_selector`, `sale_td_idx`, `check_tr_selector`, `check_tr_idx`, `check_td_selector`, `check_td_idx`) VALUES
  (0, 14, 756, NULL, NULL, 5, NULL, 2, NULL, 5, NULL, 3, NULL, 5, NULL, 0),
  (3, 6, 840, NULL, NULL, 1, NULL, 1, NULL, 1, NULL, 2, NULL, 1, NULL, 0),
  (4, 6, 978, NULL, NULL, 2, NULL, 1, NULL, 2, NULL, 2, NULL, 2, NULL, 0),
  (5, 7, 840, NULL, NULL, 2, NULL, 1, NULL, 2, NULL, 2, NULL, 2, NULL, 0),
  (6, 7, 978, NULL, NULL, 3, NULL, 1, NULL, 3, NULL, 2, NULL, 3, NULL, 0),
  (7, 5, 840, NULL, NULL, 1, NULL, 2, NULL, 1, NULL, 3, NULL, 1, NULL, 0),
  (8, 5, 978, NULL, NULL, 2, NULL, 2, NULL, 2, NULL, 3, NULL, 2, NULL, 0),
  (9, 3, 840, NULL, '.currencyItem', 0, '.buy', 0, '.currencyItem', 0, '.sell', 0, '.currencyItem', 0, '.title', 0),
  (10, 3, 978, NULL, '.currencyItem', 1, '.buy', 0, '.currencyItem', 1, '.sell', 0, '.currencyItem', 1, '.title', 0),
  (11, 2, 840, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
  (12, 2, 978, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
  (13, 4, 840, 0.01000, NULL, 1, NULL, 5, NULL, 1, NULL, 6, NULL, 1, NULL, 0),
  (14, 4, 978, 0.01000, NULL, 2, NULL, 5, NULL, 2, NULL, 6, NULL, 2, NULL, 0),
  (15, 9, 840, NULL, NULL, 1, NULL, 1, NULL, 1, NULL, 2, NULL, 1, NULL, 0),
  (16, 9, 978, NULL, NULL, 3, NULL, 1, NULL, 3, NULL, 2, NULL, 3, NULL, 0),
  (19, 12, 840, NULL, NULL, 1, NULL, 1, NULL, 1, NULL, 2, NULL, 1, NULL, 0),
  (20, 12, 978, NULL, NULL, 2, NULL, 1, NULL, 2, NULL, 2, NULL, 2, NULL, 0),
  (21, 13, 840, NULL, NULL, 1, NULL, 1, NULL, 1, NULL, 2, NULL, 1, NULL, 0),
  (24, 13, 978, NULL, NULL, 3, NULL, 1, NULL, 3, NULL, 2, NULL, 3, NULL, 0),
  (25, 14, 840, NULL, NULL, 1, NULL, 2, NULL, 1, NULL, 3, NULL, 1, NULL, 0),
  (27, 16, 840, NULL, NULL, 1, NULL, 1, NULL, 1, NULL, 2, NULL, 1, NULL, 0),
  (28, 16, 978, NULL, NULL, 2, NULL, 1, NULL, 2, NULL, 2, NULL, 2, NULL, 0),
  (29, 18, 840, NULL, NULL, 1, NULL, 1, NULL, 1, NULL, 2, NULL, 1, NULL, 0),
  (30, 18, 978, NULL, NULL, 2, NULL, 1, NULL, 2, NULL, 2, NULL, 2, NULL, 0),
  (31, 10, 840, 0.01000, NULL, 5, NULL, 2, NULL, 5, NULL, 3, NULL, 5, NULL, 1),
  (32, 10, 643, 0.01000, NULL, 4, NULL, 2, NULL, 4, NULL, 3, NULL, 4, NULL, 1),
  (33, 19, 840, NULL, NULL, 1, NULL, 0, NULL, 1, NULL, 1, NULL, 1, 'th', 0),
  (34, 19, 978, NULL, NULL, 2, NULL, 0, NULL, 2, NULL, 1, NULL, 2, 'th', 0),
  (35, 2, 985, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
  (36, 2, 826, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
  (37, 2, 643, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
  (38, 8, 840, 0.01000, NULL, 3, NULL, 3, NULL, 3, NULL, 5, NULL, 3, NULL, 0),
  (39, 8, 978, 0.01000, NULL, 7, NULL, 3, NULL, 7, NULL, 5, NULL, 7, NULL, 0),
  (40, 8, 826, 0.01000, NULL, 2, NULL, 3, NULL, 2, NULL, 5, NULL, 2, NULL, 0),
  (41, 8, 985, 0.01000, NULL, 5, NULL, 3, NULL, 5, NULL, 5, NULL, 5, NULL, 0),
  (42, 8, 643, 0.00100, NULL, 6, NULL, 3, NULL, 6, NULL, 5, NULL, 6, NULL, 0),
  (43, 17, 840, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
  (44, 17, 978, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
  (45, 17, 643, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
  (46, 1, 840, NULL, NULL, 1, NULL, 1, NULL, 1, NULL, 2, NULL, 1, NULL, 0),
  (47, 1, 978, NULL, NULL, 2, NULL, 1, NULL, 2, NULL, 2, NULL, 2, NULL, 0),
  (48, 1, 826, NULL, NULL, 4, NULL, 1, NULL, 4, NULL, 2, NULL, 4, NULL, 0),
  (49, 1, 643, NULL, NULL, 3, NULL, 1, NULL, 3, NULL, 2, NULL, 3, NULL, 0),
  (50, 1, 756, NULL, NULL, 5, NULL, 1, NULL, 5, NULL, 2, NULL, 5, NULL, 0),
  (51, 2, 756, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
  (52, 3, 826, NULL, '.currencyItem', 2, '.buy', 0, '.currencyItem', 2, '.sell', 0, '.currencyItem', 2, '.title', 0),
  (53, 3, 985, NULL, '.currencyItem', 3, '.buy', 0, '.currencyItem', 3, '.sell', 0, '.currencyItem', 3, '.title', 0),
  (54, 3, 643, NULL, '.currencyItem', 4, '.buy', 0, '.currencyItem', 4, '.sell', 0, '.currencyItem', 4, '.title', 0),
  (55, 4, 643, 0.10000, NULL, 3, NULL, 5, NULL, 3, NULL, 6, NULL, 3, NULL, 0),
  (56, 5, 643, NULL, NULL, 3, NULL, 2, NULL, 3, NULL, 3, NULL, 3, NULL, 0),
  (57, 5, 826, NULL, NULL, 4, NULL, 2, NULL, 4, NULL, 3, NULL, 4, NULL, 0),
  (59, 5, 756, NULL, NULL, 5, NULL, 2, NULL, 5, NULL, 3, NULL, 5, NULL, 0),
  (60, 5, 124, NULL, NULL, 6, NULL, 2, NULL, 6, NULL, 3, NULL, 6, NULL, 0),
  (61, 5, 985, NULL, NULL, 13, NULL, 2, NULL, 13, NULL, 3, NULL, 13, NULL, 0),
  (62, 5, 392, NULL, NULL, 14, NULL, 2, NULL, 14, NULL, 3, NULL, 14, NULL, 0),
  (63, 2, 124, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
  (64, 2, 392, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
  (65, 6, 643, NULL, NULL, 3, NULL, 1, NULL, 3, NULL, 2, NULL, 3, NULL, 0),
  (66, 6, 756, NULL, NULL, 4, NULL, 1, NULL, 4, NULL, 2, NULL, 4, NULL, 0),
  (67, 6, 826, NULL, NULL, 5, NULL, 1, NULL, 5, NULL, 2, NULL, 5, NULL, 0),
  (68, 6, 124, NULL, NULL, 6, NULL, 1, NULL, 6, NULL, 2, NULL, 6, NULL, 0),
  (70, 6, 985, NULL, NULL, 7, NULL, 1, NULL, 7, NULL, 2, NULL, 7, NULL, 0),
  (71, 8, 124, 0.01000, NULL, 4, NULL, 3, NULL, 4, NULL, 5, NULL, 4, NULL, 0),
  (72, 9, 756, NULL, NULL, 5, NULL, 1, NULL, 5, NULL, 2, NULL, 5, NULL, 0),
  (73, 10, 756, 0.01000, NULL, 1, NULL, 2, NULL, 1, NULL, 3, NULL, 1, NULL, 1),
  (74, 10, 826, 0.01000, NULL, 3, NULL, 2, NULL, 3, NULL, 3, NULL, 3, NULL, 1),
  (75, 10, 978, 0.01000, NULL, 2, NULL, 2, NULL, 2, NULL, 3, NULL, 2, NULL, 1),
  (76, 11, 840, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
  (77, 11, 978, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
  (80, 11, 643, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
  (86, 13, 756, NULL, NULL, 5, NULL, 1, NULL, 5, NULL, 2, NULL, 5, NULL, 0),
  (87, 13, 826, NULL, NULL, 4, NULL, 1, NULL, 4, NULL, 2, NULL, 4, NULL, 0),
  (88, 13, 643, NULL, NULL, 2, NULL, 1, NULL, 2, NULL, 2, NULL, 2, NULL, 0),
  (89, 14, 643, NULL, NULL, 3, NULL, 2, NULL, 3, NULL, 3, NULL, 3, NULL, 0),
  (90, 14, 826, NULL, NULL, 4, NULL, 2, NULL, 4, NULL, 3, NULL, 4, NULL, 0),
  (91, 14, 978, NULL, NULL, 2, NULL, 2, NULL, 2, NULL, 3, NULL, 2, NULL, 0),
  (92, 16, 643, NULL, NULL, 3, NULL, 1, NULL, 3, NULL, 2, NULL, 3, NULL, 0),
  (93, 18, 643, NULL, NULL, 3, NULL, 1, NULL, 3, NULL, 2, NULL, 3, NULL, 0),
  (94, 19, 643, NULL, NULL, 3, NULL, 0, NULL, 3, NULL, 1, NULL, 3, 'th', 0),
  (95, 7, 643, NULL, NULL, 4, NULL, 1, NULL, 4, NULL, 2, NULL, 4, NULL, 0);

--
-- Дамп даних таблиці `grabber_strategy_info`
--

INSERT INTO `grabber_strategy_info` (`id`, `bank_id`, `name`, `url`, `cells_selector`, `cells_idx`) VALUES
  (1, 2, 'Aval', 'http://aval.ua/personal/everyday/exchange/exchange/', 'div.body-currency-block-rba table.body-currency', 0),
  (2, 1, 'Nbu', 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange', NULL, NULL),
  (3, 11, 'Idea', 'http://www.ideabank.ua/', '.currencyBox', 0),
  (4, 5, 'Oschadny', 'http://www.oschadbank.ua/ua/private/currency/', 'table', 0),
  (5, 9, 'Eximb', 'https://www.eximb.com/ukr/personal/everyday/currency_exchange/', '.table_1', 0),
  (6, 6, 'Creditagricole', 'https://credit-agricole.ua/press/exchange-rates', '#content2 table', 1),
  (7, 4, 'Creditdnepr', 'http://creditdnepr.com.ua/kursy-valyut', '.field-content table.table-s1', 0),
  (8, 8, 'Kredo', 'http://www.kredobank.com.ua/exchange_rates/ex_bank/', 'table.ourTable', 0),
  (9, 10, 'Otp', 'http://www.otpbank.com.ua/', '.currency-rates table', 0),
  (10, 14, 'Pivdenniy', 'http://bank.com.ua/ua/rates/', '.content table', 0),
  (11, 3, 'Privat', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', NULL, NULL),
  (12, 12, 'Procredit', 'http://www.procreditbank.com.ua/private-individuals/credit-cards/archive-exchange-rates/', '#currenciesContainer table', 0),
  (13, 13, 'Pumb', 'https://pumb.ua', '.exchange-rate table', 0),
  (14, 7, 'Ukrsib', 'https://my.ukrsibbank.com/ua/personal/operations/currency_exchange/', '#tab_desc table.content_tbl2', 0),
  (15, 16, 'Black', NULL, NULL, NULL),
  (16, NULL, 'Finance', 'http://finance.i.ua/', '.Right .local_table', 0),
  (17, NULL, 'Minfin', 'http://minfin.com.ua/currency/auction/%CURRENCY%/buy/all/', '.au-status .au-status--group', 0),
  (18, NULL, 'Telegraf', 'http://telegraf.com.ua/kurs-valute/', '.kurs-block .right table.kurs-table', 0),
  (19, 17, 'Mizhbank', 'http://finance.liga.net/rates/mb/', 'table#link_mb', 0);

--
-- Дамп даних таблиці `site_currency_rates`
--

INSERT INTO `site_currency_rates` (`id`, `currency_id`, `rate`) VALUES
  (1, 840, 1),
  (2, 978, 2);
SET FOREIGN_KEY_CHECKS=1;
