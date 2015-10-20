-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Час створення: Жов 20 2015 р., 20:00
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

-- --------------------------------------------------------

--
-- Структура таблиці `api_keys`
--

DROP TABLE IF EXISTS `api_keys`;
CREATE TABLE IF NOT EXISTS `api_keys` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `key` varchar(256) NOT NULL,
  `status` enum('enabled','disabled') NOT NULL DEFAULT 'disabled',
  `comment` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблиці `api_log`
--

DROP TABLE IF EXISTS `api_log`;
CREATE TABLE IF NOT EXISTS `api_log` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `key_id` int(10) unsigned DEFAULT NULL,
  `ip` varchar(64) DEFAULT NULL,
  `query` varchar(256) DEFAULT NULL,
  `status` enum('success','error') NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `key_id` (`key_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблиці `banks`
--

DROP TABLE IF EXISTS `banks`;
CREATE TABLE IF NOT EXISTS `banks` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type` set('bank','market') NOT NULL DEFAULT 'bank',
  `title` varchar(512) NOT NULL,
  `rate` smallint(6) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблиці `currency`
--

DROP TABLE IF EXISTS `currency`;
CREATE TABLE IF NOT EXISTS `currency` (
  `id` int(11) NOT NULL,
  `code` varchar(5) NOT NULL,
  `title` varchar(128) NOT NULL,
  `symbol` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблиці `exchanges_new`
--

DROP TABLE IF EXISTS `exchanges_new`;
CREATE TABLE IF NOT EXISTS `exchanges_new` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `bank_id` int(10) unsigned NOT NULL,
  `dollar_buy` decimal(10,5) NOT NULL,
  `dollar_sale` decimal(10,5) NOT NULL,
  `euro_buy` decimal(10,5) NOT NULL,
  `euro_sale` decimal(10,5) NOT NULL,
  `grab_date` date NOT NULL,
  `bank_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `bank_id and date` (`bank_id`,`grab_date`),
  KEY `id` (`id`),
  KEY `bank_id` (`bank_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

--
-- Обмеження зовнішнього ключа збережених таблиць
--

--
-- Обмеження зовнішнього ключа таблиці `api_log`
--
ALTER TABLE `api_log`
  ADD CONSTRAINT `api_log_ibfk_1` FOREIGN KEY (`key_id`) REFERENCES `api_keys` (`id`);

--
-- Обмеження зовнішнього ключа таблиці `exchanges_new`
--
ALTER TABLE `exchanges_new`
  ADD CONSTRAINT `exchanges_new_ibfk_1` FOREIGN KEY (`bank_id`) REFERENCES `banks` (`id`);
SET FOREIGN_KEY_CHECKS=1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
