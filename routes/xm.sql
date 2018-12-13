SET NAMES UTF8;
DROP DATABASE IF EXISTS xm;
CREATE DATABASE xm CHARSET=UTF8;
USE xm;
CREATE TABLE login(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(18),
	upwd VARCHAR(18),
	phone CHAR(11),
	user_name VARCHAR(20)
);
CREATE TABLE pic(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	img    VARCHAR(128)
);
CREATE TABLE index_pic1(
	lid INT PRIMARY KEY AUTO_INCREMENT,
	img    VARCHAR(128),
	title   VARCHAR(128)
);
CREATE TABLE product1_pic(
	aid  INT PRIMARY KEY AUTO_INCREMENT,
	img    VARCHAR(128),
	title   VARCHAR(128)
);
CREATE TABLE details_pic(
	tid  INT PRIMARY KEY AUTO_INCREMENT,
	img    VARCHAR(128),
	title   VARCHAR(128)
);
/**    用户信息   **/
INSERT INTO login VALUES('NULL','dangdang',123456,15888888888,'当当');
INSERT INTO login VALUES('NULL','dingding',123456,15800000000,'丁丁');
INSERT INTO login VALUES('NULL','duoduo',123456,15800000000,'朵朵');
INSERT INTO login VALUES('NULL','dada',123456,15800000000,'达达');
INSERT INTO login VALUES('NULL','david',123456,15800000000,'大卫');
INSERT INTO login VALUES('NULL','lucy',123456,15800000000,'露西');


/**   图片库   **/
INSERT INTO pic VALUES('NULL','img/5b91dcc77d285.jpg');
INSERT INTO pic VALUES('NULL','img/5b91dcdc757a4.jpg');
INSERT INTO pic VALUES('NULL','img/5b91ddad0cc26.jpg');
INSERT INTO pic VALUES('NULL','img/5b91dce4bbbff.jpg');
INSERT INTO pic VALUES('NULL','img/webp');
INSERT INTO pic VALUES('NULL','img/webp(1)');
INSERT INTO pic VALUES('NULL','img/webp(2)');
INSERT INTO pic VALUES('NULL','img/webp(3)');
INSERT INTO pic VALUES('NULL','img/webp(4)');
INSERT INTO pic VALUES('NULL','img/webp(5)');
INSERT INTO pic VALUES('NULL','img/webp(6)');
INSERT INTO pic VALUES('NULL','img/webp(7)');
INSERT INTO pic VALUES('NULL','img/webp(8)');
INSERT INTO pic VALUES('NULL','img/webp(9)');
INSERT INTO pic VALUES('NULL','img/webp(10)');
INSERT INTO pic VALUES('NULL','img/webp(11)');
INSERT INTO pic VALUES('NULL','img/webp(12)');
INSERT INTO pic VALUES('NULL','img/webp(13)');
INSERT INTO pic VALUES('NULL','img/webp(14)');
INSERT INTO pic VALUES('NULL','img/webp(15)');
INSERT INTO pic VALUES('NULL','img/webp(16)');
INSERT INTO pic VALUES('NULL','img/webp(17)');
INSERT INTO pic VALUES('NULL','img/webp(18)');
INSERT INTO pic VALUES('NULL','img/webp(19)');
INSERT INTO pic VALUES('NULL','img/webp(20)');
INSERT INTO pic VALUES('NULL','img/webp(21)');
INSERT INTO pic VALUES('NULL','img/webp(22)');
INSERT INTO pic VALUES('NULL','img/webp(23)');
INSERT INTO pic VALUES('NULL','img/webp(24)');
INSERT INTO pic VALUES('NULL','img/webp(25)');
INSERT INTO pic VALUES('NULL','img/webp(26)');
INSERT INTO pic VALUES('NULL','img/webp(27)');
INSERT INTO pic VALUES('NULL','img/webp(28)');
INSERT INTO pic VALUES('NULL','img/webp(29)');
INSERT INTO pic VALUES('NULL','img/webp(30)');
INSERT INTO pic VALUES('NULL','img/webp(31)');
INSERT INTO pic VALUES('NULL','img/webp(32)');
INSERT INTO pic VALUES('NULL','img/webp(33)');
INSERT INTO pic VALUES('NULL','img/webp(34)');
INSERT INTO pic VALUES('NULL','img/webp(35)');
INSERT INTO pic VALUES('NULL','img/webp(36)');
INSERT INTO pic VALUES('NULL','img/webp(37)');
INSERT INTO pic VALUES('NULL','img/webp(38)');
INSERT INTO pic VALUES('NULL','img/webp(39)');
INSERT INTO pic VALUES('NULL','img/webp(40)');
INSERT INTO pic VALUES('NULL','img/webp(41)');
INSERT INTO pic VALUES('NULL','img/webp(42)');
INSERT INTO pic VALUES('NULL','img/webp(43)');
INSERT INTO pic VALUES('NULL','img/webp(44)');
INSERT INTO pic VALUES('NULL','img/webp(45)');
INSERT INTO pic VALUES('NULL','img/webp(46)');
INSERT INTO pic VALUES('NULL','img/webp(47)');
INSERT INTO pic VALUES('NULL','img/webp(48)');
INSERT INTO pic VALUES('NULL','img/webp(49)');
INSERT INTO pic VALUES('NULL','img/webp(50)');
INSERT INTO pic VALUES('NULL','img/webp(51)');
INSERT INTO pic VALUES('NULL','img/webp(52)');
INSERT INTO pic VALUES('NULL','img/webp(53)');
INSERT INTO pic VALUES('NULL','img/webp(54)');
INSERT INTO pic VALUES('NULL','img/webp(55)');
INSERT INTO pic VALUES('NULL','img/webp(56)');



/**      首页图片       **/
INSERT INTO index_pic1 VALUES('NULL','img/5b91dcc77d285.jpg','看趋势&nbsp;|&nbsp;复古肌理');
INSERT INTO index_pic1 VALUES('NULL','img/5b91dcdc757a4.jpg','设计师&nbsp;|&nbsp;7');
INSERT INTO index_pic1 VALUES('NULL','img/5b91ddad0cc26.jpg','插画&nbsp;|&nbsp;治愈系');
INSERT INTO index_pic1 VALUES('NULL','img/5b91dce4bbbff.jpg','配图&nbsp;|&nbsp;表情包');
INSERT INTO index_pic1 VALUES('NULL','img/webp','灰蓝调水墨白露节气海报');
INSERT INTO index_pic1 VALUES('NULL','img/webp(1)','节气海报白鹭节气节日白色简约');
INSERT INTO index_pic1 VALUES('NULL','img/webp(2)','感恩爱心鲜花难忘教师节海报');
INSERT INTO index_pic1 VALUES('NULL','img/webp(3)','师说教师节海报');










/**          product图片           **/
INSERT INTO product1_pic VALUES('NULL','img/webp(8)','复古肌理'),
('NULL','img/webp(8)','原创复古肌理插画教师节海报'),
('NULL','img/webp(9)','原创复古肌理教师节海报'),
('NULL','img/webp(11)','原创七夕复古肌理插画活动海报'),
('NULL','img/webp(12)','原创复古肌理插画教师节海报'),
('NULL','img/webp(13)','原创复古肌理插画教师节海报'),
('NULL','img/webp(14)','原创复古肌理教师节海报'),
('NULL','img/webp(15)','原创七夕复古肌理插画活动海报'),
('NULL','img/webp(16)','原创复古肌理插画中秋节海报'),
('NULL','img/webp(17)','原创复古肌理插画教师节海报'),
('NULL','img/webp(18)','原创复古肌理教师节海报'),
('NULL','img/webp(19)','原创七夕复古肌理插画活动海报'),
('NULL','img/webp(20)','原创复古肌理插画中秋节海报');






/*             details图片             */
INSERT INTO details_pic VALUES('NULL','img/webp(8)',' 官方授权可商用100%正版作品。成为原创VIP即可享受免费海量下载，低至每天0.18元&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'),
('NULL','img/webp(25)','原创复古肌理插画秋分海报'),
('NULL','img/webp(26)','原创复古肌理教师节海报'),
('NULL','img/webp(27)','原创七夕复古肌理插画中秋活动海报'),
('NULL','img/webp(28)','原创复古肌理插画中秋节海报'),
('NULL','img/webp(29)','原创复古肌理插画秋天海报'),
('NULL','img/webp(30)','原创复古肌理九月海报'),
('NULL','img/webp(31)','原创七夕复古肌理插画秋分活动海报'),
('NULL','img/webp(32)','原创蓝色唯美冰原海报'),
('NULL','img/webp(14)','原创复古肌理插画教师节海报'),
('NULL','img/webp(15)','原创复古肌理插画教师节海报'),
('NULL','img/webp(16)','原创复古肌理插画教师节海报');