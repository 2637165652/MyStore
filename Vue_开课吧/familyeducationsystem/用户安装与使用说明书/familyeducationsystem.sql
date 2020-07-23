/*
SQLyog Ultimate v11.33 (64 bit)
MySQL - 8.0.16 : Database - familyeducationsystem
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`familyeducationsystem` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `familyeducationsystem`;

/*Table structure for table `administrator` */

DROP TABLE IF EXISTS `administrator`;

CREATE TABLE `administrator` (
  `userId` int(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`username`),
  KEY `userId` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `administrator` */

insert  into `administrator`(`userId`,`username`,`password`) values (2,'管理员','666666'),(1,'黄李斌','20162180057');

/*Table structure for table `record_contacted` */

DROP TABLE IF EXISTS `record_contacted`;

CREATE TABLE `record_contacted` (
  `recordNum` int(20) NOT NULL,
  `studentsex` char(2) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `grade` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `subject` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `requirement` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `address` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `linkname` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '联系人称呼',
  `linkphone` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '联系方式',
  `publisherId` int(20) NOT NULL COMMENT '发布人的用户Id',
  `releaseDate` datetime NOT NULL COMMENT '家长发布日期',
  `teachername` varchar(10) NOT NULL COMMENT '教师称呼',
  `teacherphone` varchar(20) NOT NULL COMMENT '教师电话',
  `teacherId` int(20) NOT NULL COMMENT '教师的用户Id',
  `receiveDate` datetime NOT NULL COMMENT '教师领取日期',
  PRIMARY KEY (`recordNum`,`releaseDate`,`teacherId`,`receiveDate`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `record_contacted` */

insert  into `record_contacted`(`recordNum`,`studentsex`,`grade`,`subject`,`requirement`,`address`,`linkname`,`linkphone`,`publisherId`,`releaseDate`,`teachername`,`teacherphone`,`teacherId`,`receiveDate`) values (100004,'女','一年级','语文','学生是一位高二女生，成绩不理想，想找一位教师辅导数学。要求教师认真负责，有经验。辅导时间：1次/周，周五晚7:30-9:30。辅导价格：70元/h，不报销车费。','天河区中山大道西天河商贸大厦','何先生','11111111111',1,'2020-03-01 00:00:00','陈教师','14444444444',4,'2020-03-23 00:00:00'),(100007,'女','五年级','英语','学生是一位高二女生，成绩不理想，想找一位教师辅导数学。要求教师认真负责，有经验。辅导时间：1次/周，周五晚7:30-9:30。辅导价格：70元/h，不报销车费。','天河区天河公园附近','何先生','11111111111',1,'2020-03-02 00:00:00','陈教师','14444444444',4,'2020-03-18 00:00:00'),(100009,'女','五年级','语文','学生是一名五年级的女生，性格文静，成绩不理想，想找一位教师辅导语文。要求教师认真负责，有辅导经验，有学习方法。 辅导时间：每周2次，每次2小时，周三晚6:00-8:00和周五晚7:00-9:00。辅导价格：每小时60元，报销车费(公交地铁)。具体协商。','从化区从化广场','胡小姐','17777777777',7,'2020-03-27 00:00:00','胡小姐','17777777777',7,'2020-03-27 00:00:00'),(100025,'男','高一','地理','学生是一名高一的男生，性格文静，成绩中等，想找一位教师辅导化学。要求教师认真负责，有辅导经验，有学习方法。 辅导时间：每周2次，每次2小时，周三晚6:00-8:00和周五晚7:00-9:00。辅导价格：每小时60元，报销车费(公交地铁)。具体协商。','越秀区中山一路','王先生','19999999999',9,'2020-03-31 00:00:00','李教师','16666666666',6,'2020-03-31 15:29:25'),(100039,'男','高二','文综','学生是一名高二的文科男生，性格文静，成绩中等，想找一位教师辅导文综。要求教师认真负责，有辅导经验，有学习方法。 辅导时间：每周2次，每次2小时，周三晚6:00-8:00和周五晚7:00-9:00。辅导价格：每小时60元，报销车费(公交地铁)。具体协商。','番禺区番禺广场','何先生','11111111111',1,'2020-05-07 00:00:00','陈笑','14444444444',4,'2020-05-07 15:32:41');

/*Table structure for table `record_uncontacted` */

DROP TABLE IF EXISTS `record_uncontacted`;

CREATE TABLE `record_uncontacted` (
  `recordNum` int(20) NOT NULL AUTO_INCREMENT COMMENT '家教编号,第一份编号100001',
  `studentsex` varchar(2) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '性别',
  `grade` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '年级',
  `subject` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '科目',
  `requirement` varchar(500) NOT NULL COMMENT '要求',
  `address` varchar(20) NOT NULL COMMENT '辅导地点',
  `linkname` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '联系人称呼',
  `linkphone` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '联系方式',
  `publisherId` int(20) NOT NULL COMMENT '发布人的用户Id，即userId',
  `releaseDate` datetime NOT NULL COMMENT '家教发布日期',
  PRIMARY KEY (`recordNum`,`requirement`)
) ENGINE=InnoDB AUTO_INCREMENT=100040 DEFAULT CHARSET=utf8;

/*Data for the table `record_uncontacted` */

insert  into `record_uncontacted`(`recordNum`,`studentsex`,`grade`,`subject`,`requirement`,`address`,`linkname`,`linkphone`,`publisherId`,`releaseDate`) values (100002,'女','三年级','英语','学生是一名三年级的女生，性格活泼，成绩一般，想找一位教师辅导英语。要求教师认真负责，有辅导经验，有学习方法。 辅导时间：每周2次，每次2小时，周三晚6:00-8:00和周五晚7:00-9:00。辅导价格：每小时60元，报销车费(公交地铁)。具体协商。','天河区尚德大厦','胡小姐','17777777777',7,'2020-03-28 00:30:10'),(100022,'男','初二','物理','学生是一名初二的女生，性格活泼，成绩一般，想找一位教师辅导物理。要求教师认真负责，有辅导经验，有学习方法。 辅导时间：每周2次，每次2小时，周三晚6:00-8:00和周五晚7:00-9:00。辅导价格：每小时60元，报销车费(公交地铁)。具体协商。','天河区珠江新城','陈先生','18888888888',8,'2020-03-31 13:27:26'),(100026,'男','高一','地理','学生是一名高一的男生，性格文静，成绩中等，想找一位教师辅导化学。要求教师认真负责，有辅导经验，有学习方法。 辅导时间：每周2次，每次2小时，周三晚6:00-8:00和周五晚7:00-9:00。辅导价格：每小时60元，报销车费(公交地铁)。具体协商。','越秀区中山一路','王先生','19999999999',6,'2020-04-02 10:16:56'),(100027,'男','一年级','语文','学生是一名一年级的男生，性格文静，成绩中等，想找一位教师辅导数学。要求教师认真负责，有辅导经验，有学习方法。 辅导时间：每周2次，每次2小时，周三晚6:00-8:00和周五晚7:00-9:00。辅导价格：每小时60元，报销车费(公交地铁)。具体协商。','广州天河区','李先生','18888888888',1,'2020-04-16 08:41:01'),(100028,'女','三年级','英语','学生是一名三年级的女生，性格文静，成绩中等，想找一位教师辅导英语。要求教师认真负责，有辅导经验，有学习方法。 辅导时间：每周2次，每次2小时，周三晚6:00-8:00和周五晚7:00-9:00。辅导价格：每小时60元，报销车费(公交地铁)。具体协商。','广州天河','李先生','18888888888',1,'2020-04-16 08:42:15'),(100029,'女','高二','化学','学生是一名高二的女生，性格文静，成绩中等，想找一位教师辅导化学。要求教师认真负责，有辅导经验，有学习方法。 辅导时间：每周2次，每次2小时，周三晚6:00-8:00和周五晚7:00-9:00。辅导价格：每小时60元，报销车费(公交地铁)。具体协商。','华南师范大学石牌校区','黄先生','10000000000',11,'2020-04-20 19:43:43'),(100032,'女','二年级','数学','学生是一名二年级的女生，性格文静，成绩中等，想找一位教师辅导数学。要求教师认真负责，有辅导经验，有学习方法。 辅导时间：每周2次，每次2小时，周三晚6:00-8:00和周五晚7:00-9:00。辅导价格：每小时60元，报销车费(公交地铁)。具体协商。','番禺区番禺广场附近','何先生','11111111111',1,'2020-05-07 15:19:45'),(100033,'男','六年级','英语','学生是一名六年级的男生，性格文静，成绩中等，想找一位教师辅导英语。要求教师认真负责，有辅导经验，有学习方法。 辅导时间：每周2次，每次2小时，周三晚6:00-8:00和周五晚7:00-9:00。辅导价格：每小时60元，报销车费(公交地铁)。具体协商。','番禺区番禺广场','何先生','11111111111',1,'2020-05-07 15:21:32'),(100034,'男','初三','化学','学生是一名初三的男生，性格文静，成绩中等，想找一位教师辅导化学。要求教师认真负责，有辅导经验，有学习方法。 辅导时间：每周2次，每次2小时，周三晚6:00-8:00和周五晚7:00-9:00。辅导价格：每小时60元，报销车费(公交地铁)。具体协商。','番禺区番禺广场附近','何先生','11111111111',1,'2020-05-07 15:22:51'),(100035,'女','四年级','语文','学生是一名四年级的女生，性格文静，成绩中等，想找一位教师辅导语文。要求教师认真负责，有辅导经验，有学习方法。 辅导时间：每周2次，每次2小时，周三晚6:00-8:00和周五晚7:00-9:00。辅导价格：每小时60元，报销车费(公交地铁)。具体协商。','番禺区番禺广场附近','何先生','1111111111',1,'2020-05-07 15:24:11'),(100036,'女','初一','政治','学生是一名初一的女生，性格文静，成绩中等，想找一位教师辅导政治。要求教师认真负责，有辅导经验，有学习方法。 辅导时间：每周2次，每次2小时，周三晚6:00-8:00和周五晚7:00-9:00。辅导价格：每小时60元，报销车费(公交地铁)。具体协商。','番禺区番禺广场','何先生','11111111111',1,'2020-05-07 15:25:45'),(100037,'男','五年级','数学','学生是一名五年级的男生，性格文静，成绩中等，想找一位教师辅导数学。要求教师认真负责，有辅导经验，有学习方法。 辅导时间：每周2次，每次2小时，周三晚6:00-8:00和周五晚7:00-9:00。辅导价格：每小时60元，报销车费(公交地铁)。具体协商。','番禺区番禺广场','何先生','11111111111',1,'2020-05-07 15:27:02'),(100038,'女','高三','历史','学生是一名高三的女生，性格文静，成绩中等，想找一位教师辅导历史。要求教师认真负责，有辅导经验，有学习方法。 辅导时间：每周2次，每次2小时，周三晚6:00-8:00和周五晚7:00-9:00。辅导价格：每小时60元，报销车费(公交地铁)。具体协商。','番禺区番禺广场','何先生','11111111111',1,'2020-05-07 15:28:36');

/*Table structure for table `usermessage` */

DROP TABLE IF EXISTS `usermessage`;

CREATE TABLE `usermessage` (
  `userId` int(20) NOT NULL AUTO_INCREMENT COMMENT '用户编号',
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用于登录',
  `password` varchar(20) NOT NULL COMMENT '密码',
  `sex` char(2) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '性别',
  `phonenumber` varchar(20) DEFAULT NULL COMMENT '手机号',
  `address` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '住址',
  `identity` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '用户身份：家长/学生，家教老师',
  `schoolname` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '学校名字；家教老师需填',
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

/*Data for the table `usermessage` */

insert  into `usermessage`(`userId`,`username`,`password`,`sex`,`phonenumber`,`address`,`identity`,`schoolname`) values (1,'何先生','123456','男','11111111111','天河区天河公园附近1','家长',''),(2,'廖小姐','123456','女','12222222222','番禺区番禺广场','家长',''),(3,'张三','123456','男','13333333333','天河区尚德大厦','家长',''),(4,'陈教师','123456','女','14444444444','天河区珠江新城','家教老师','暨南大学'),(5,'李小姐','123456','女','15555555555','越秀区越秀公园','家长',''),(6,'李教师','123456','男','16666666666','华南师范大学石牌校区','家教老师','华南师范大学'),(7,'胡小姐','123456','女','17777777777','天河区尚德大厦1102房','家长',NULL),(8,'陈先生','123456','男','18888888888','天河区珠江新城','家长',NULL),(11,'黄李斌','20162180057','男','10000000000','华南师范大学石牌校区','家教老师','华南师范大学'),(13,'牛先生','123456','男','null','null','家长','null');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
