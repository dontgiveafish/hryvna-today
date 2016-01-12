-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Час створення: Січ 12 2016 р., 10:38
-- Версія сервера: 5.5.46-0ubuntu0.14.04.2
-- Версія PHP: 5.5.9-1ubuntu4.14

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

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
  `id` int(10) unsigned NOT NULL,
  `code` varchar(5) NOT NULL,
  `title` varchar(128) NOT NULL,
  `symbol` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблиці `exchange_rates`
--

DROP TABLE IF EXISTS `exchange_rates`;
CREATE TABLE IF NOT EXISTS `exchange_rates` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `bank_id` int(10) unsigned NOT NULL,
  `currency_id` int(10) unsigned NOT NULL,
  `buy` decimal(10,5) NOT NULL,
  `sale` decimal(10,5) NOT NULL,
  `grab_date` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `bank_id and date` (`bank_id`,`currency_id`,`grab_date`),
  KEY `id` (`id`),
  KEY `currency_id` (`currency_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблиці `grabber_currency_checker`
--

DROP TABLE IF EXISTS `grabber_currency_checker`;
CREATE TABLE IF NOT EXISTS `grabber_currency_checker` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `currency_id` int(10) unsigned NOT NULL,
  `value` varchar(64) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `currency_id` (`currency_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблиці `grabber_strategy_currency`
--

DROP TABLE IF EXISTS `grabber_strategy_currency`;
CREATE TABLE IF NOT EXISTS `grabber_strategy_currency` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `strategy_id` int(10) unsigned NOT NULL,
  `currency_id` int(10) unsigned NOT NULL,
  `currency_multiplier` decimal(10,5) DEFAULT NULL,
  `buy_tr_selector` varchar(256) DEFAULT NULL,
  `buy_tr_idx` int(10) DEFAULT NULL,
  `buy_td_selector` varchar(256) DEFAULT NULL,
  `buy_td_idx` int(10) DEFAULT NULL,
  `sale_tr_selector` varchar(256) DEFAULT NULL,
  `sale_tr_idx` int(10) DEFAULT NULL,
  `sale_td_selector` varchar(256) DEFAULT NULL,
  `sale_td_idx` int(10) DEFAULT NULL,
  `check_tr_selector` varchar(256) DEFAULT NULL,
  `check_tr_idx` int(10) DEFAULT NULL,
  `check_td_selector` varchar(256) DEFAULT NULL,
  `check_td_idx` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bank_id` (`strategy_id`,`currency_id`),
  KEY `currency_id` (`currency_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблиці `grabber_strategy_info`
--

DROP TABLE IF EXISTS `grabber_strategy_info`;
CREATE TABLE IF NOT EXISTS `grabber_strategy_info` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `bank_id` int(10) unsigned DEFAULT NULL,
  `name` varchar(64) NOT NULL,
  `url` varchar(256) DEFAULT NULL,
  `cells_selector` varchar(256) DEFAULT NULL,
  `cells_idx` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `bank_id` (`bank_id`)
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
-- Обмеження зовнішнього ключа таблиці `exchange_rates`
--
ALTER TABLE `exchange_rates`
ADD CONSTRAINT `exchange_rates_ibfk_1` FOREIGN KEY (`currency_id`) REFERENCES `currency` (`id`),
ADD CONSTRAINT `exchange_rates_ibfk_2` FOREIGN KEY (`bank_id`) REFERENCES `banks` (`id`);

--
-- Обмеження зовнішнього ключа таблиці `grabber_currency_checker`
--
ALTER TABLE `grabber_currency_checker`
ADD CONSTRAINT `grabber_currency_checker_ibfk_1` FOREIGN KEY (`currency_id`) REFERENCES `currency` (`id`);

--
-- Обмеження зовнішнього ключа таблиці `grabber_strategy_currency`
--
ALTER TABLE `grabber_strategy_currency`
ADD CONSTRAINT `grabber_strategy_currency_ibfk_2` FOREIGN KEY (`currency_id`) REFERENCES `currency` (`id`),
ADD CONSTRAINT `grabber_strategy_currency_ibfk_3` FOREIGN KEY (`strategy_id`) REFERENCES `grabber_strategy_info` (`id`);

--
-- Обмеження зовнішнього ключа таблиці `grabber_strategy_info`
--
ALTER TABLE `grabber_strategy_info`
ADD CONSTRAINT `grabber_strategy_info_ibfk_1` FOREIGN KEY (`bank_id`) REFERENCES `banks` (`id`);
SET FOREIGN_KEY_CHECKS=1;
