
DROP TABLE IF EXISTS `myworlddb`.`book`;

CREATE TABLE `myworlddb`.`book` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(200) NULL,
  `created_at` DATETIME NULL,
  `changed_at` DATETIME NULL,
  PRIMARY KEY (`id`));
