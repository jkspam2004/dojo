CREATE DATABASE  IF NOT EXISTS `mydb` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `mydb`;
-- MySQL dump 10.13  Distrib 5.7.9, for osx10.9 (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	5.5.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_level` tinyint(3) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (13,'Donald','Duck','donald@duck.com','$2b$12$wTOCBzHY7QJAqf5IWzf/VuVw8IODaF6HmTnvkZvjJ3uzQbrywhN9y',9,'2016-07-19 19:00:00','2016-08-01 23:35:12','my best friend is mickey'),(14,'Daisy','Duck','daisy@duck.com','$2b$12$tLeRvkmsZl4doIqm1ssOHe6dQEpRF1OgAZFQ7ETgLX5HOY2xA0M6y',0,'2016-07-19 19:09:46','2016-07-19 19:09:46',NULL),(15,'Minnie','Mouse','minnie@mouse.com','$2b$12$jIOGAsaG52.DyV5xDusf3ufAy.J37cF3nqjFxOES1O8zcx6MrDAx.',0,'2016-07-19 19:14:32','2016-07-19 19:14:32',NULL),(16,'Mickey','Mouse','mickey@mouse.com','$2b$12$MTM5BbnxbbWdPaOC0E9AceqKEeAZSQM8419JIndcvNQxZn5TPdjYW',0,'2016-07-19 21:16:36','2016-07-19 21:16:36',NULL),(17,'Stinky','Pete','stinky@pete.com','$2b$12$c.8LRTgZMhGoWFsEJcn6K.mhLRHCRZMxIBWoP7sLHwUVWIyMzP9wi',9,'2016-07-19 23:28:08','2016-07-20 08:23:51',NULL),(22,'Goofy','Goofy','goofy@goofy.com','$2b$12$a4XR2Oi.WtrlK2LFZ1v9EeUKE36GgC8/rsHLUC9E0Y4qqGyP9PDTy',0,'2016-08-02 01:06:58','2016-08-02 01:06:58',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-08-03 18:31:05
