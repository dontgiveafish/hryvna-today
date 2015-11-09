-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Час створення: Лис 09 2015 р., 22:03
-- Версія сервера: 5.5.46-0ubuntu0.14.04.2
-- Версія PHP: 5.5.9-1ubuntu4.14

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База даних: `hryvna`
--

--
-- Дамп даних таблиці `banks`
--

INSERT INTO `banks` (`id`, `type`, `title`, `rate`) VALUES
(1, 'bank', 'Національний банк України', 1),
(2, 'bank', 'Райффайзен Банк Аваль', 3),
(3, 'bank', 'ПриватБанк', 2),
(4, 'bank', 'Кредит Дніпро', 0),
(5, 'bank', 'Ощадбанк', 4),
(6, 'bank', 'Креді Агріколь Банк', 0),
(7, 'bank', 'УкрСиббанк', 0),
(8, 'bank', 'Кредобанк', 0),
(9, 'bank', 'Укрексімбанк', 0),
(10, 'bank', 'ОТП Банк', 0),
(11, 'bank', 'Ідея Банк', 0),
(12, 'bank', 'ПроКредит Банк', 0),
(13, 'bank', 'ПУМБ', 0),
(14, 'bank', 'Банк Південний', 0),
(16, 'market', 'Чорний ринок', 5);

--
-- Дамп даних таблиці `currency`
--

INSERT INTO `currency` (`id`, `code`, `title`, `symbol`) VALUES
(840, 'USD', 'Долар США', '$'),
(978, 'EUR', 'Євро', '€'),
(980, 'UAH', 'Гривня', '₴');

--
-- Дамп даних таблиці `grab_banks`
--

INSERT INTO `grab_banks` (`id`, `bank_id`, `name`, `url`, `cells_selector`, `cells_idx`) VALUES
(1, 2, 'Aval', 'http://aval.ua/personal/everyday/exchange/exchange/', 'table.right-currency', 0),
(2, 1, 'Nbu', 'http://www.bank.gov.ua/control/uk/curmetal/currency/search', '.content table', 3),
(3, 11, 'Idea', 'http://www.ideabank.ua/', '.currencyBox', 0),
(4, 5, 'Oschadny', 'http://oschadnybank.com/ua/private/currency/currency_rates/', '.content_block table.table-striped', 0),
(5, 9, 'Eximb', 'https://www.eximb.com/ukr/personal/everyday/currency_exchange/', '.table_1', 0),
(6, 6, 'Creditagricole', 'https://credit-agricole.ua/press/exchange-rates', '#content table', 1),
(7, 4, 'Creditdnepr', 'http://creditdnepr.com.ua/ukr/online/currency-rate-precious-metals/', '#currency-list table', 0),
(8, 8, 'Kredo', 'http://www.kredobank.com.ua/', '#kurs', 0),
(9, 10, 'Otp', 'http://www.otpbank.com.ua/', '.currency-rates table', 0),
(10, 14, 'Pivdenniy', 'http://bank.com.ua/ru/rates/', '.content table', 0),
(11, 3, 'Privat', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', NULL, NULL),
(12, 12, 'Procredit', 'http://www.procreditbank.com.ua/private-individuals/credit-cards/archive-exchange-rates/', '#currenciesContainer table', 0),
(13, 13, 'Pumb', 'http://pumb.ua/ua/', '#tab1 .currency table', 0),
(14, 7, 'Ukrsib', 'https://my.ukrsibbank.com/ua/personal/operations/currency_exchange/', '#tab_desc table.content_tbl2', 0);

--
-- Дамп даних таблиці `grab_banks_currency`
--

INSERT INTO `grab_banks_currency` (`id`, `bank_id`, `currency_id`, `currency_multiplier`, `buy_tr_selector`, `buy_tr_idx`, `buy_td_selector`, `buy_td_idx`, `sale_tr_selector`, `sale_tr_idx`, `sale_td_selector`, `sale_td_idx`, `check_tr_selector`, `check_tr_idx`, `check_td_selector`, `check_td_idx`) VALUES
(1, 2, 840, NULL, NULL, 1, NULL, 1, NULL, 1, NULL, 2, NULL, 1, NULL, 0),
(2, 2, 978, NULL, NULL, 2, NULL, 1, NULL, 2, NULL, 2, NULL, 2, NULL, 0),
(3, 6, 840, NULL, NULL, 1, NULL, 1, NULL, 1, NULL, 2, NULL, 1, NULL, 0),
(4, 6, 978, NULL, NULL, 2, NULL, 1, NULL, 2, NULL, 2, NULL, 2, NULL, 0),
(5, 4, 840, NULL, NULL, 2, NULL, 1, NULL, 2, NULL, 2, NULL, 2, NULL, 0),
(6, 4, 978, NULL, NULL, 3, NULL, 1, NULL, 3, NULL, 2, NULL, 3, NULL, 0),
(7, 9, 840, NULL, NULL, 1, NULL, 2, NULL, 1, NULL, 3, NULL, 1, NULL, 0),
(8, 9, 978, NULL, NULL, 2, NULL, 2, NULL, 2, NULL, 3, NULL, 2, NULL, 0),
(9, 11, 840, NULL, '.currencyItem', 0, '.buy', 0, '.currencyItem', 0, '.sell', 0, '.currencyItem', 0, '.title', 0),
(10, 11, 978, NULL, '.currencyItem', 1, '.buy', 0, '.currencyItem', 1, '.sell', 0, '.currencyItem', 1, '.title', 0),
(11, 1, 840, 0.01000, NULL, 6, NULL, 4, NULL, 6, NULL, 4, NULL, 6, NULL, 1),
(12, 1, 978, 0.01000, NULL, 7, NULL, 4, NULL, 7, NULL, 4, NULL, 7, NULL, 1),
(13, 5, 840, 0.01000, NULL, 1, NULL, 5, NULL, 1, NULL, 6, NULL, 1, NULL, 0),
(14, 5, 978, 0.01000, NULL, 2, NULL, 5, NULL, 2, NULL, 6, NULL, 2, NULL, 0),
(15, 10, 840, NULL, NULL, 1, NULL, 1, NULL, 1, NULL, 2, NULL, 1, NULL, 0),
(16, 10, 978, NULL, NULL, 3, NULL, 1, NULL, 3, NULL, 2, NULL, 3, NULL, 0),
(17, 14, 840, 0.01000, NULL, 5, NULL, 2, NULL, 5, NULL, 3, NULL, 5, NULL, 1),
(18, 14, 978, 0.01000, NULL, 2, NULL, 2, NULL, 2, NULL, 3, NULL, 2, NULL, 1),
(19, 12, 840, NULL, NULL, 1, NULL, 1, NULL, 1, NULL, 2, NULL, 1, NULL, 0),
(20, 12, 978, NULL, NULL, 2, NULL, 1, NULL, 2, NULL, 2, NULL, 2, NULL, 0),
(21, 13, 840, NULL, NULL, 1, NULL, 1, NULL, 1, NULL, 2, NULL, 1, NULL, 0),
(24, 13, 978, NULL, NULL, 2, NULL, 1, NULL, 2, NULL, 2, NULL, 2, NULL, 0),
(25, 7, 840, NULL, NULL, 1, NULL, 2, NULL, 1, NULL, 3, NULL, 1, NULL, 0),
(26, 7, 978, NULL, NULL, 2, NULL, 2, NULL, 2, NULL, 3, NULL, 2, NULL, 0);
SET FOREIGN_KEY_CHECKS=1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
