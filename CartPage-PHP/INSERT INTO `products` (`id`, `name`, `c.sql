CREATE TABLE IF NOT EXISTS `products` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `code` varchar(100) NOT NULL,
  `price` double(9, 2) NOT NULL,
  `image` varchar(250) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1 AUTO_INCREMENT = 4;
--
--  data for table `products`
--
INSERT INTO `products` (`id`, `name`, `code`, `price`, `image`)
VALUES
  (
    1,
    'Warrior Energy Tee',
    '	0001',
    300.00,
    'ILSProject-ShoppingSite-\images\warriorEnergy.jpg'
  ),
  (
    2,
    'King Tut',
    '0002',
    300.00,
    'ILSProject-ShoppingSite-\images\IMG-20200208-WA0030.jpg'
  ),
  (
    3,
    'Yellow Crotchet Bikini',
    '0003',
    220.00,
    'ILSProject-ShoppingSite-\images\swimsuityel.jpg'
  );