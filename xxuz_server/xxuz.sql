#设置客户端连接服务器使用的编码
SET NAMES UTF8;
#丢弃数据库xxuz，如果存在的话
DROP DATABASE IF EXISTS xxuz;
#创建数据库，设置存储的编码
CREATE DATABASE xxuz CHARSET=UTF8;
#进入该数据库
USE xxuz;

#用户信息
CREATE TABLE xx_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  phone VARCHAR(16),
  utype INT
);
INSERT INTO xx_user VALUES
(NULL, 'dingding', '123456', '13501234567', 1),
(NULL, 'dangdang', '123456', '13501234568', 0),
(NULL, 'doudou', '123456', '13501234569', 0),
(NULL, 'yaya', '123456', '13501234560', 1);

#商品信息
CREATE TABLE xx_product(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  family_id  INT,           #所属型号家族编号
  title VARCHAR(128),       #主标题
  subtitle VARCHAR(128),    #副标题
  price DECIMAL(10,2),      #价格
  spec VARCHAR(64),         #规格
  lname VARCHAR(32),        #商品小标题
  pic VARCHAR(128)          #图片
)
INSERT INTO xx_product VALUES
(1,1,"ThinkPad E470 14英寸笔记本电脑租赁【E470:i3 7代/4G/500G/核显/14英寸】","轻薄便携学习手提电脑",99,"i3/4G/320G/核显","E470","img/detail/lenovo/le1.jpg"),
(2,1,"ThinkPad E470 14英寸笔记本电脑租赁【E470:i3 7代/4G/500G/核显/14英寸】","轻薄便携学习手提电脑",99,"i3/4G/128G SSD/核显","E470","img/detail/lenovo/le1.jpg"),
(3,1,"ThinkPad E470 14英寸笔记本电脑租赁【E470:i3 7代/8G/500G/核显/14英寸】","轻薄便携学习手提电脑",119,"i3/8G/128G SSD/核显","E470","img/detail/lenovo/le1.jpg"),
(4,1,"ThinkPad E470 14英寸笔记本电脑租赁【E470:i3 7代/8G/500G/核显/14英寸】","轻薄便携学习手提电脑",129,"i3/8G/256G SSD/核显","E470","img/detail/lenovo/le1.jpg"),
(5,2,"Apple iPad Pro平板电脑租赁 12.9英寸【ipad Pro:WIFI版 32G（深空灰色）】","春暖花开，万物苏醒。换新装备好季节！一身轻，更举重若轻。办公娱乐学习都不误！",175,"WIFI版 /32G/（深空灰色）","ipad Pro","img/detail/phone/ipad1.png"),
(6,2,"Apple iPad Pro平板电脑租赁 12.9英寸【ipad Pro:WIFI版 32G（银色）】","春暖花开，万物苏醒。换新装备好季节！一身轻，更举重若轻。办公娱乐学习都不误！",175,"WIFI版 /32G/（银色）","ipad Pro","img/detail/phone/ipad1.png"),
(7,2,"Apple iPad Pro平板电脑租赁 12.9英寸【ipad Pro:WIFI版 32G（金色）】","春暖花开，万物苏醒。换新装备好季节！一身轻，更举重若轻。办公娱乐学习都不误！",175,"WIFI版 /32G/（金色）","ipad Pro","img/detail/phone/ipad1.png"),
(8,2,"Apple iPad Pro平板电脑租赁 12.9英寸【ipad Pro:WIFI版 32G（玫瑰金色）】","春暖花开，万物苏醒。换新装备好季节！一身轻，更举重若轻。办公娱乐学习都不误！",175,"WIFI版 /32G/（玫瑰金色）","ipad Pro","img/detail/phone/ipad1.png"),
(9,3,"苹果 MacBook Pro 笔记本租赁【MacPro:I5/8GB/120G SSD/集显/13.3寸】","办公生活，高端品质之选",218,"I5/8GB/120G SSD/集显/13.3寸","MacPro","img/detail/apple/ap1.jpg"),
(10,3,"苹果 MacBook Pro 笔记本租赁【MacPro:I5/8GB/240G SSD/集显/13.3寸】","办公生活，高端品质之选",218,"I5/8GB/240G SSD/集显/13.3寸","MacPro","img/detail/apple/ap1.jpg"),
(11,3,"苹果 MacBook Pro 笔记本租赁【MacPro:I7/16GB/240G SSD/集显/15.4寸】","办公生活，高端品质之选",218,"I7/16GB/240G SSD/集显/15.4寸","MacPro","img/detail/apple/ap1.jpg"),
(12,3,"苹果 MacBook Pro 笔记本租赁【MacPro:I7/16GB/240G SSD/独显/15.4寸】","办公生活，高端品质之选",218,"I7/16GB/240G SSD/独显/15.4寸","MacPro","img/detail/apple/ap1.jpg"),
(13,4,"戴尔 3050 台式机租赁【戴尔 3050:I3 7代/4G/1T/集显/21.5寸】","商务办公电脑租赁",135,"I3 7代/4G/1T/集显/21.5寸","戴尔 3050","img/detail/dell/de1.jpg"),
(14,4,"戴尔 3050 台式机租赁【戴尔 3050:I5 7代/8G/1T/集显/21.5寸】","商务办公电脑租赁",165,"I5 7代/8G/1T/集显/21.5寸","戴尔 3050","img/detail/dell/de1.jpg"),
(15,4,"戴尔 3050 台式机租赁【戴尔 3050:I5 7代/4G/1T+128G SSD/23寸】","商务办公电脑租赁",190,"I5 7代/4G/1T+128G SSD/23寸","戴尔 3050","img/detail/dell/de1.jpg"),
(16,4,"戴尔 3050 台式机租赁【戴尔 3050:I5 7代/8G/1T+128G SSD/2G 独显/24寸】","商务办公电脑租赁",229,"I5 7代/8G/1T+128G SSD/2G 独显/24寸","戴尔 3050","img/detail/dell/de1.jpg"),
(17,4,"戴尔 3050 台式机租赁【戴尔 3050:G4560/4G/500G/集显/21.5寸】","商务办公电脑租赁",119,"G4560/4G/500G/集显/21.5寸","戴尔 3050","img/detail/dell/de1.jpg"),
(18,5,"戴尔(DELL)PowerEdge R430服务器主机租赁【R430:E5-2603V3 16G/600G*2块(10K)H330】","高可靠性 高扩展性 管理企业的可靠选择！",625,"E5-2603V3  16G/600G*2块(10K)H330","R430","img/detail/serve/se1.png"),
(19,5,"戴尔(DELL)PowerEdge R430服务器主机租赁【R430:E5-2603V3 8G/1TSAS/H330】","高可靠性 高扩展性 管理企业的可靠选择！",545,"E5-2603V3 8G/1TSAS/H330","R430","img/detail/serve/se1.png"),
(20,5,"戴尔(DELL)PowerEdge R430服务器主机租赁【R430:E5-2603V3 16G/1TB*2块(7.2K)/H330】","高可靠性 高扩展性 管理企业的可靠选择！",630,"E5-2603V3 16G/1TB*2块(7.2K)/H330","R430","img/detail/serve/se1.png"),
(21,5,"戴尔(DELL)PowerEdge R430服务器主机租赁【R430:E5-2603V3 16G/2TB*2块(7.2K)/H330】","高可靠性 高扩展性 管理企业的可靠选择！",630,"E5-2603V3 16G/2TB*2块(7.2K)/H330","R430","img/detail/serve/se1.png"),
(22,5,"戴尔(DELL)PowerEdge R430服务器主机租赁【E5-2603V3 16G/1TB(7.2K)/H330】","高可靠性 高扩展性 管理企业的可靠选择！",625,"E5-2603V3 16G/1TB(7.2K)/H330","R430","img/detail/serve/se1.png"),
(23,6,"空气治理器租赁【空气治理器:2个月起租 600元/月】","高效空气治理技术",600,"2个月起租 600元/月","空气治理器","img/detail/clear/cl1.jpg"),
(24,6,"空气治理器租赁【空气治理器:3个月起租 500元/月】","高效空气治理技术",500,"3个月起租 500元/月","空气治理器","img/detail/clear/cl1.jpg"),
(25,6,"空气治理器租赁【空气治理器:6个月起租 428元/月】","高效空气治理技术",428,"6个月起租 428元/月","空气治理器","img/detail/clear/cl1.jpg")

#首页商品
CREATE TABLE xx_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  details VARCHAR(128),
  spec VARCHAR(64),
  pic VARCHAR(128),
  price DECIMAL(10,2)
)
INSERT INTO xx_index_product VALUES
(1,"ThinkPad E470 笔记本租赁","i3 7代/4G/500G/核显/14英寸","img/index/bn1.jpg",99),
(9,"MacBook Pro 笔记本租赁","I5/8GB/120G SSD/集显/13.3寸","img/index/bn2.jpg",218),
(13,"戴尔 3050 笔记本租赁","I3 7代/4G/1T/集显/21.5寸","img/index/bn3.jpg",135),
(5,"Apple iPad 平板电脑租赁","ipad Pro:WIFI版 32G（深空灰色）","img/index/bn4.png",175)

#商品图片
CREATE TABLE xx_product_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  family_id INT,
  img_url VARCHAR(128)
)
INSERT INTO xx_product_pic VALUES
(null,1,"img/detail/lenovo/le1.jpg"),
(null,1,"img/detail/lenovo/le2.jpg"),
(null,1,"img/detail/lenovo/le3.jpg"),
(null,1,"img/detail/lenovo/le4.jpg"),
(null,2,"img/detail/phone/ipad1.png"),
(null,2,"img/detail/phone/ipad2.png"),
(null,2,"img/detail/phone/ipad3.png"),
(null,3,"img/detail/apple/ap1.jpg"),
(null,3,"img/detail/apple/ap2.jpg"),
(null,3,"img/detail/apple/ap3.jpg"),
(null,4,"img/detail/dell/de1.jpg"),
(null,4,"img/detail/dell/de2.png"),
(null,4,"img/detail/dell/de3.png"),
(null,4,"img/detail/dell/de4.png"),
(null,5,"img/detail/serve/se1.png"),
(null,5,"img/detail/serve/se2.png"),
(null,5,"img/detail/serve/se3.png"),
(null,5,"img/detail/serve/se4.png"),
(null,5,"img/detail/serve/se5.png"),
(null,6,"img/detail/clear/cl1.jpg"),
(null,6,"img/detail/clear/cl2.png"),
(null,6,"img/detail/clear/cl3.jpg")