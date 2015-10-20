-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Час створення: Жов 20 2015 р., 20:02
-- Версія сервера: 5.5.44-0ubuntu0.14.04.1
-- Версія PHP: 5.5.9-1ubuntu4.13

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
(980, 'UAH', 'Гривня', '₴'),
(840, 'USD', 'Долар США', '$'),
(978, 'EUR', 'Євро', '€');
SET FOREIGN_KEY_CHECKS=1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
