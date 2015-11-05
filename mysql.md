MySQL查询优化之explain的深入解析

/*select * from t_person where idNoAuthStatus = 2;

select * from t_user where createTime>'2014-12-31 23:59:59';

select a.email,a.createTime, a.id, a.mobilePhone,b.userId, b.idNoAuthStatus from t_user a join t_person b on a.id=b.userId and createTime>'2014-12-31 23:59:59' and idNoAuthStatus=2;

select distinct a.* from t_user a join t_invest b on b.investor=a.id;

*/

-- 所有的今年实名认证的用户ID
(select a.id from t_user a join t_person b on a.id=b.userId and createTime>'2014-12-31 23:59:59' and idNoAuthStatus=2);

-- 有今年实名且为投资的用户ID
explain select distinct investor  from t_invest where investor not in (select a.id from t_user a join t_person b on a.id=b.userId and createTime>'2014-12-31 23:59:59' and idNoAuthStatus=2);

-- 所有今年实名认证 并且 已经投资的
select count(distinct investor) from t_invest as a left join (select a.id from t_user a join t_person b on a.id=b.userId and createTime>'2014-12-31 23:59:59' and idNoAuthStatus=2) as b on (a.investor = b.id) where b.id is null;


-- select * from xxxx where id in (1,2,3,4)

-- select * from xxxd where id = 1 or id =2 or id =3 or id=4








mysql命令大全

一、MySQL 连接本地数据库，用户名为“root”，密码“123”（注意：“-p”和“123” 之间不能有空格）

C:\>mysql -h localhost -u root -p123
二、MySQL 连接远程数据库（192.168.0.201），端口“3306”，用户名为“root”，密码“123”

C:\>mysql -h 192.168.0.201 -P 3306 -u root -p123


SQL DML 和 DDL
可以把 SQL 分为两个部分：数据操作语言 (DML) 和 数据定义语言 (DDL)。
SQL (结构化查询语言)是用于执行查询的语法。但是 SQL 语言也包含用于更新、插入和删除记录的语法。
查询和更新指令构成了 SQL 的 DML 部分：
SELECT - 从数据库表中获取数据
UPDATE - 更新数据库表中的数据
DELETE - 从数据库表中删除数据
INSERT INTO - 向数据库表中插入数据
SQL 的数据定义语言 (DDL) 部分使我们有能力创建或删除表格。我们也可以定义索引（键），规定表之间的链接，以及施加表间的约束。
SQL 中最重要的 DDL 语句:
CREATE DATABASE - 创建新数据库
ALTER DATABASE - 修改数据库
CREATE TABLE - 创建新表
ALTER TABLE - 变更（改变）数据库表
DROP TABLE - 删除表
CREATE INDEX - 创建索引（搜索键）
DROP INDEX - 删除索引
use test;                                              切换数据库
show tables;                                           显示当前数据库下的表名；
SELECT column1, column2....columnN FROM   table_name;  查询语句
SELECT DISTINCT column1, column2....columnN FROM   table_name; 去除重复值

where条件查询
select * from t_feedback where qq = 'sdsd';

查询 查询某几个值匹配到的字段
select qq from t_feedback where id in (1,5
);

between 查询某个范围内的字段
select qq from t_feedback where id between 1 and 5

与或查询
SELECT column1, column2....columnN
FROM   table_name
WHERE  CONDITION-1 {AND|OR} CONDITION-2;


ORDER BY 语句用于对结果集进行排序。ORDER BY 语句默认按照升序对记录进行排序。 如果您希望按照降序对记录进行排序，可以使用 DESC 关键字。
SELECT Company, OrderNumber FROM Orders ORDER BY Company


插入语句

INSERT INTO Persons VALUES ('Gates', 'Bill', 'Xuanwumen 10', 'Beijing');

INSERT INTO Persons (LastName, Address) VALUES ('Wilson', 'Champs-Elysees');

更新表中的值
UPDATE Person SET FirstName = 'Fred' WHERE LastName = 'Wilson'
更新某一行中的若干列
UPDATE Person SET Address = 'Zhongshan 23', City = 'Nanjing'
WHERE LastName = 'Wilson';

DELETE 语句用于删除表中的行。
DELETE FROM Person WHERE LastName = 'Wilson'
DELETE FROM table_name
DELETE * FROM table_name



TOP 子句用于规定要返回的记录的数目。
对于拥有数千条记录的大型表来说，TOP 子句是非常有用的。
SELECT TOP 2 * FROM Persons; 从person中选取最新的两条记录
//选取前50%的记录
SELECT TOP 50 PERCENT * FROM Persons


LIKE 操作符用于在 WHERE 子句中搜索列中的指定模式。

"Persons" 表中选取居住在以 "N" 开始的城市里的人：
SELECT * FROM Persons WHERE City LIKE 'N%'

"Persons" 表中选取居住在以 "g" 结尾的城市里的人：
SELECT * FROM Persons WHERE City LIKE '%g'

从 "Persons" 表中选取居住在包含 "lon" 的城市里的人：
SELECT * FROM Persons WHERE City LIKE '%lon%'

从 "Persons" 表中选取居住在不包含 "lon" 的城市里的人：
SELECT * FROM Persons WHERE City NOT LIKE '%lon%'


通配符	描述
%	          替代一个或多个字符
_	           仅替代一个字符

[charlist]	  字符列中的任何单一字符
[^charlist]
或者
[!charlist]
不在字符列中

从 "Persons" 表中选取的这条记录的姓氏以 "C" 开头，然后是一个任意字符，然后是 "r"，然后是任意字符，然后是 "er"：
SELECT * FROM Persons WHERE LastName LIKE 'C_r_er'
"Persons" 表中选取居住的城市以 "A" 或 "L" 或 "N" 开头的人：
SELECT * FROM Persons WHERE City LIKE '[ALN]%'

"Persons" 表中选取居住的城市不以 "A" 或 "L" 或 "N" 开头的人：
SELECT * FROM Persons WHERE City LIKE '[!ALN]%'

从上表中选取姓氏为 Adams 和 Carter 的人：
SELECT * FROM Persons WHERE LastName IN ('Adams','Carter')


通过使用 SQL，可以为列名称和表名称指定别名（Alias）。

我们可以使用下面的 SELECT 语句：
SELECT po.OrderID, p.LastName, p.FirstName
FROM Persons AS p, Product_Orders AS po
WHERE p.LastName='Adams' AND p.FirstName='John'

不使用别名的 SELECT 语句：
SELECT Product_Orders.OrderID, Persons.LastName, Persons.FirstName
FROM Persons, Product_Orders
WHERE Persons.LastName='Adams' AND Persons.FirstName='John'
从上面两条 SELECT 语句您可以看到，别名使查询程序更易阅读和书写。

SELECT LastName AS Family, FirstName AS Name
FROM Persons



SQL join 用于根据两个或多个表中的列之间的关系，从这些表中查询数据。

请看 "Persons" 表：
Id_P	LastName	FirstName	Address	         City
1	     Adams	    John	    Oxford Street	London
2	     Bush	    George	    Fifth Avenue	New York
3	     Carter	    Thomas	    Changan Street	Beijing

接下来请看 "Orders" 表：
Id_O	OrderNo	 Id_P
1		77895	  3
2		44678	  3
3		22456	  1
4		24562	  1
5		34764	  65


我们可以通过引用两个表的方式，从两个表中获取数据：
谁订购了产品，并且他们订购了什么产品？
SELECT Persons.LastName, Persons.FirstName, Orders.OrderNo
FROM Persons, Orders
WHERE Persons.Id_P = Orders.Id_P
除了上面的方法，我们也可以使用关键词 JOIN 来从两个表中获取数据。
如果我们希望列出所有人的定购，可以使用下面的 SELECT 语句：
SELECT Persons.LastName, Persons.FirstName, Orders.OrderNo
FROM Persons
INNER JOIN Orders
ON Persons.Id_P = Orders.Id_P
ORDER BY Persons.LastName

不同的 SQL JOIN
除了我们在上面的例子中使用的 INNER JOIN（内连接），我们还可以使用其他几种连接。
下面列出了您可以使用的 JOIN 类型，以及它们之间的差异。
JOIN: 如果表中有至少一个匹配，则返回行
LEFT JOIN: 即使右表中没有匹配，也从左表返回所有的行
RIGHT JOIN: 即使左表中没有匹配，也从右表返回所有的行
FULL JOIN: 只要其中一个表中存在匹配，就返回行


SQL UNION 操作符
UNION 操作符用于合并两个或多个 SELECT 语句的结果集。
请注意，UNION 内部的 SELECT 语句必须拥有相同数量的列。列也必须拥有相似的数据类型。同时，每条 SELECT 语句中的列的顺序必须相同。
SELECT column_name(s) FROM table_name1
UNION ALL
SELECT column_name(s) FROM table_name2



/**未实际应用成功*/
SELECT INTO 语句
SELECT INTO 语句从一个表中选取数据，然后把数据插入另一个表中。
SELECT INTO 语句常用于创建表的备份复件或者用于对记录进行存档。

您可以把所有的列插入新表：
SELECT *
INTO new_table_name [IN externaldatabase]
FROM old_tablename
或者只把希望的列插入新表：
SELECT column_name(s)
INTO new_table_name [IN externaldatabase]
FROM old_tablename




创建数据库
CREATE DATABASE database_name



SQL CREATE TABLE 实例
本例演示如何创建名为 "Person" 的表。
该表包含 5 个列，列名分别是："Id_P"、"LastName"、"FirstName"、"Address" 以及 "City"：
CREATE TABLE Persons
(
Id_P int,
LastName varchar(255),
FirstName varchar(255),
Address varchar(255),
City varchar(255)
)



SQL 约束
约束用于限制加入表的数据的类型。
可以在创建表时规定约束（通过 CREATE TABLE 语句），或者在表创建之后也可以（通过 ALTER TABLE 语句）。
我们将主要探讨以下几种约束：
NOT NULL
UNIQUE
PRIMARY KEY
FOREIGN KEY
CHECK
DEFAULT
注释：在下面的章节，我们会详细讲解每一种约束。
\\CHECK
CREATE TABLE CUSTOMERS(
       ID   INT              NOT NULL,
       NAME VARCHAR (20)     NOT NULL,
       AGE  INT              NOT NULL CHECK (AGE >= 18),
       ADDRESS  CHAR (25) ,
       SALARY   DECIMAL (18, 2),
       PRIMARY KEY (ID)
);


SQL NOT NULL 约束
NOT NULL 约束强制列不接受 NULL 值。
NOT NULL 约束强制字段始终包含值。这意味着，如果不向字段添加值，就无法插入新记录或者更新记录。
下面的 SQL 语句强制 "Id_P" 列和 "LastName" 列不接受 NULL 值：
CREATE TABLE Persons
(
Id_P int NOT NULL,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255)
)



SQL UNIQUE 约束
UNIQUE 约束唯一标识数据库表中的每条记录。
UNIQUE 和 PRIMARY KEY 约束均为列或列集合提供了唯一性的保证。
PRIMARY KEY 拥有自动定义的 UNIQUE 约束。
请注意，每个表可以有多个 UNIQUE 约束，但是每个表只能有一个 PRIMARY KEY 约束
CREATE TABLE Persons
(
Id_P int NOT NULL,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255),
UNIQUE (Id_P)
)

SQL CHECK Constraint on ALTER TABLE
如果在表已存在的情况下为 "Id_P" 列创建 CHECK 约束，请使用下面的 SQL：
MySQL / SQL Server / Oracle / MS Access:
ALTER TABLE Persons
ADD CHECK (Id_P>0)
如果需要命名 CHECK 约束，以及为多个列定义 CHECK 约束，请使用下面的 SQL 语法：
MySQL / SQL Server / Oracle / MS Access:
ALTER TABLE Persons
ADD CONSTRAINT chk_Person CHECK (Id_P>0 AND City='Sandnes')

撤销 CHECK 约束
如需撤销 CHECK 约束，请使用下面的 SQL：
SQL Server / Oracle / MS Access:
ALTER TABLE Persons
DROP CONSTRAINT chk_Person
MySQL:
ALTER TABLE Persons
DROP CHECK chk_Person


SQL DEFAULT 约束
DEFAULT 约束用于向列中插入默认值。
如果没有规定其他的值，那么会将默认值添加到所有的新记录。
CREATE TABLE Persons
(
	Id_P int NOT NULL,
	LastName varchar(255) NOT NULL,
	FirstName varchar(255),
	Address varchar(255),
	City varchar(255) DEFAULT 'Sandnes'
)

撤销 DEFAULT 约束
如需撤销 DEFAULT 约束，请使用下面的 SQL：
MySQL:
ALTER TABLE Persons
ALTER City DROP DEFAULT

SQL Server / Oracle / MS Access:
ALTER TABLE Persons
ALTER COLUMN City DROP DEFAULT


##CREATE INDEX 语句用于在表中创建索引。
##在不读取整个表的情况下，索引使数据库应用程序可以更快地查找数据。
SQL CREATE INDEX 语法
在表上创建一个简单的索引。允许使用重复的值：
CREATE INDEX index_name
ON table_name (column_name)

本例会创建一个简单的索引，名为 "PersonIndex"，在 Person 表的 LastName 列：
CREATE INDEX PersonIndex
ON Person (LastName)
如果您希望以降序索引某个列中的值，您可以在列名称之后添加保留字 DESC：
CREATE INDEX PersonIndex
ON Person (LastName DESC)
假如您希望索引不止一个列，您可以在括号中列出这些列的名称，用逗号隔开：
CREATE INDEX PersonIndex
ON Person (LastName, FirstName)



通过使用 DROP 语句，可以轻松地删除索引、表和数据库。

ALTER TABLE table_name DROP INDEX index_name

SQL DROP TABLE 语句
DROP TABLE 语句用于删除表（表的结构、属性以及索引也会被删除）：
DROP TABLE 表名称


SQL DROP DATABASE 语句
DROP DATABASE 语句用于删除数据库：
DROP DATABASE 数据库名称

SQL TRUNCATE TABLE 语句
如果我们仅仅需要除去表内的数据，但并不删除表本身，那么我们该如何做呢？
请使用 TRUNCATE TABLE 命令（仅仅删除表格中的数据）：
TRUNCATE TABLE 表名称



ALTER TABLE 语句
ALTER TABLE 语句用于在已有的表中添加、修改或删除列。

SQL ALTER TABLE 语法
如需在表中添加列，请使用下列语法:
ALTER TABLE table_name
ADD column_name datatype
要删除表中的列，请使用下列语法：
ALTER TABLE table_name
DROP COLUMN column_name
注释：某些数据库系统不允许这种在数据库表中删除列的方式 (DROP COLUMN column_name)。
要改变表中列的数据类型，请使用下列语法：
ALTER TABLE table_name
ALTER COLUMN column_name datatype

SQL ALTER TABLE 实例
现在，我们希望在表 "Persons" 中添加一个名为 "Birthday" 的新列。
我们使用下列 SQL 语句：
ALTER TABLE Persons
ADD Birthday date


改变数据类型实例
现在我们希望改变 "Persons" 表中 "Birthday" 列的数据类型。
我们使用下列 SQL 语句：
ALTER TABLE Persons
ALTER COLUMN Birthday year

DROP COLUMN 实例
接下来，我们删除 "Person" 表中的 "Birthday" 列：
ALTER TABLE Person
DROP COLUMN Birthday


AUTO INCREMENT 字段
我们通常希望在每次插入新记录时，自动地创建主键字段的值。
我们可以在表中创建一个 auto-increment 字段。
用于 MySQL 的语法
下列 SQL 语句把 "Persons" 表中的 "P_Id" 列定义为 auto-increment 主键：
CREATE TABLE Persons
(
P_Id int NOT NULL AUTO_INCREMENT,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255),
PRIMARY KEY (P_Id)
)



SQL CREATE VIEW 语句
什么是视图？
在 SQL 中，视图是基于 SQL 语句的结果集的可视化的表。
视图包含行和列，就像一个真实的表。视图中的字段就是来自一个或多个数据库中的真实的表中的字段。我们可以向视图添加 SQL 函数、WHERE 以及 JOIN 语句，我们也可以提交数据，就像这些来自于某个单一的表。
注释：数据库的设计和结构不会受到视图中的函数、where 或 join 语句的影响。

SQL CREATE VIEW 语法
CREATE VIEW view_name AS
SELECT column_name(s)
FROM table_name
WHERE condition

样本数据库 Northwind 拥有一些被默认安装的视图。视图 "Current Product List" 会从 Products 表列出所有正在使用的产品。这个视图使用下列 SQL 创建：
CREATE VIEW [Current Product List] AS
SELECT ProductID,ProductName
FROM Products
WHERE Discontinued=No
我们可以查询上面这个视图：
SELECT * FROM [Current Product List]

SQL 更新视图
您可以使用下面的语法来更新视图：
SQL CREATE OR REPLACE VIEW Syntax
CREATE OR REPLACE VIEW view_name AS
SELECT column_name(s)
FROM table_name
WHERE condition
现在，我们希望向 "Current Product List" 视图添加 "Category" 列。我们将通过下列 SQL 更新视图：
CREATE VIEW [Current Product List] AS
SELECT ProductID,ProductName,Category
FROM Products
WHERE Discontinued=No
SQL 撤销视图
您可以通过 DROP VIEW 命令来删除视图。
SQL DROP VIEW Syntax
DROP VIEW view_name


















//创建用户表
create table tbl_customers (
	id int(10)  unsigned not null auto_increment comment 'id 主键' ,
	person  varchar(32) NOT NULL DEFAULT '' comment '姓名' ,
	emil varchar(32)  DEFAULT NULL comment '邮箱',
	phone varchar(32) DEFAULT NULL COMMENT '手机号',
	country varchar(64) DEFAULT NULL COMMENT '国家',
	province varchar(64) DEFAULT NULL COMMENT '省',
	city varchar(64) DEFAULT NULL COMMENT '市',
	address varchar(128) DEFAULT NULL COMMENT '详细地址',
	addressEN varchar(128) DEFAULT NULL COMMENT '英文地址',
	zip varchar(32)  DEFAULT NULL comment '邮编',
	sex varchar(5)  DEFAULT NULL comment '性别',
	birthday varchar(16)  DEFAULT NULL comment '出生日期',
	primary key (id),
	UNIQUE (id)

);

//现有商品表

create table tbl_good (
	commodityLinkage int(32)  unsigned not null comment '编号' ,
	commodityBrand  varchar(32) NOT NULL DEFAULT '' comment '品牌' ,
	commodity_CN varchar(32)  DEFAULT NULL comment '中文名称',
	commodity_EN varchar(32) DEFAULT NULL COMMENT '英文名称',
	commodityPrice decimal(10,2) DEFAULT NULL COMMENT '价格',
	commodityCurrency varchar(16) DEFAULT NULL COMMENT '币种',
	HSCODE varchar(32) DEFAULT NULL COMMENT '行邮税号',
	rate decimal(5,2) DEFAULT NULL COMMENT '税率',
	primary key (commodityLinkage),
	UNIQUE (commodityLinkage)
);



//订单中商品
create table tbl_order_good (
	merchantOrderId varchar(32)   not null comment '订单号',
	commodityLinkage varchar(32)   not null comment '商品编号',
	commodity_CN varchar(32)  DEFAULT NULL comment '商品中文名',
	commodityNum  int(20) DEFAULT NULL comment '商品数量',
	commodityUnitPrice decimal(10,2) DEFAULT NULL COMMENT '商品单价',
	commodityCurrency varchar(16) DEFAULT NULL COMMENT '商品币种',
	commodityAmount decimal(10,2) DEFAULT NULL COMMENT '商品总价',
	HSCODE varchar(32) DEFAULT NULL COMMENT '行邮税号',
	rate decimal(5,2) DEFAULT NULL COMMENT '行邮税率',
	tax decimal(10,2) DEFAULT NULL COMMENT '税额',
	primary key (merchantOrderId)
);


//订单详情

create table tbl_order (
	merchantOrderId varchar(32)   not null comment '订单号',
	orderCommitTime varchar(32)   not null comment '订单日期',
	trackingID varchar(32)   not null comment '分运单号',
	package  int(20) DEFAULT NULL comment '件数',
	grossWeight decimal(10,2) DEFAULT NULL COMMENT '重量',
	weightUnit decimal(10,2) DEFAULT NULL COMMENT '重量单位',
	totalAmount decimal(10,2) DEFAULT NULL COMMENT '订单商品总金额',
	totalTax decimal(10,2) DEFAULT NULL COMMENT '税额',
	expressPrice decimal(10,2) DEFAULT NULL COMMENT '运费金额',
	payCUR varchar(16) DEFAULT NULL COMMENT '币种',
	personName  varchar(32) NOT NULL DEFAULT '' comment '收货人' ,
	mobile varchar(32) DEFAULT NULL COMMENT '收货人手机号',
	emil varchar(32)  DEFAULT NULL comment '收货人邮箱',
	address varchar(64)  DEFAULT NULL comment '收货人详细'
);

