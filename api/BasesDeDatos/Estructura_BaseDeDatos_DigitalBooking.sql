-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: DigitalBooking
-- ------------------------------------------------------
-- Server version	8.0.17

CREATE SCHEMA IF NOT EXISTS `BaseEjemplo_1` DEFAULT CHARACTER SET utf8 ;
USE `BaseEjemplo_1` ;

DROP TABLE IF EXISTS `BaseEjemplo_1`.`accommodations`;
CREATE TABLE `BaseEjemplo_1`.`accommodations` (
  `title` VARCHAR(45) NULL,
  `description` VARCHAR(200) NULL,
  `urlImage` VARCHAR(45) NULL,
  PRIMARY KEY (`id_accommodations`));
  
  DROP TABLE IF EXISTS `categories`;
  CREATE TABLE `BaseEjemplo_1`.`categories` (
  `id_categories` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(45) NULL,
  PRIMARY KEY (`id_categories`));
  

DROP TABLE IF EXISTS `location`;
CREATE TABLE `BaseEjemplo_1`.`location` (
  `id_location` INT NOT NULL AUTO_INCREMENT,
  `country` VARCHAR(100) NULL,
  `city` VARCHAR(100) NULL,
  `street` VARCHAR(100) NULL,
  `number` VARCHAR(20) NULL,
  `id_accommodation` INT NULL,
  PRIMARY KEY (`id_location`));
    
ALTER TABLE `BaseEjemplo_1`.`accommodations` 
ADD COLUMN `id_categorie` INT NULL AFTER `urlImage`,
ADD COLUMN `id_location` INT NULL AFTER `id_categorie`,
ADD INDEX `fk_accommodations_categories_idx` (`id_categorie` ASC) VISIBLE,
ADD INDEX `fk_accommodations_location_idx` (`id_location` ASC) VISIBLE;
;
ALTER TABLE `BaseEjemplo_1`.`accommodations` 
ADD CONSTRAINT `fk_accommodations_categories`
  FOREIGN KEY (`id_categorie`)
  REFERENCES `BaseEjemplo_1`.`categories` (`id_categories`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_accommodations_location`
  FOREIGN KEY (`id_location`)
  REFERENCES `BaseEjemplo_1`.`location` (`id_location`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;