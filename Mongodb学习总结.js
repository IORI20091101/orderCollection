下载mongoDB 将bin文件夹下所有东西放到D盘，同时新建一个data的文件夹跟bin同级，
D:\MongoDB\bin
D:\MongoDB\data

第一步：开启命令行窗口（开始--->运行--->cmd）
第二步：按如下格式输入命令
Dos代码  收藏代码
C:\Documents and Settings\chenzhou>D:
D:\>cd D:\Mongodb\bin
D:\Mongodb\bin>mongod --dbpath D:\Mongodb\data

启动成功还可以设定端口号
注：我们上面在配置mongodb服务时并没有指定服务的端口号，所以会指定mongodb默认的端口号27017
我们也可以在配置时指定端口。例：如果我们想指定mongodb的服务端口号为10001，命令如下：
Dos代码  收藏代码
mongod --dbpath D:\Mongodb\data --port 10001

浏览器访问
在浏览器输入： http://localhost:27017 可以看到如下提示：
You are trying to access MongoDB on the native driver port. For http diagnostic access, add 1000 to the port number
如此，Mongodb数据库服务已经完全启动了。
然后我们根据提示把端口加上1000访问： http://localhost:28017/
就能够访问到Mongodb的服务端web页面

客户端连接数据库
另开一个cmd窗口，原来的那个窗口不要关闭，如果窗口关闭则服务也关闭
首先通过cd命令切换到Mongodb\bin目录下，然后通过mongo ip:port 命令来连接数据库
ip代表我们需要访问的数据库服务的ip，port代表数据库服务的端口
Dos代码  收藏代码
C:\Documents and Settings\chenzhou>D:
D:\>cd Mongodb\bin
D:\Mongodb\bin>mongo 127.0.0.1:27017
MongoDB shell version: 2.0.2-rc2
connecting to: 127.0.0.1:27017/test
>
代表访问成功，连接到test库
如上例子中127.0.0.1代表本机，27017是Mongodb服务端默认端口
如果我们在配置mongodb服务时使用的是默认的端口，那么我们在通过客户端访问时可以不用指定访问的ip和port
Dos代码  收藏代码
C:\Documents and Settings\chenzhou>D:
D:\>cd Mongodb\bin
D:\Mongodb\bin>mongo
MongoDB shell version: 2.0.2-rc2
connecting to: test
>
 同样地，访问成功，连接到test库




 mac下安装mongodb

 将解压的安装文件移动到你所喜欢的位置
mv -n ~/Downloads/mongodb-osx-x86_64-2.4.6 ~/Applications/mongodb/

在根目录 / 下创建  data/db 目录，用于放置mongodb数据，并且给该目录设置权限
sudo mkdir -p /data/db
sudo chown -R  toshiba /data

启动mongodb 服务

进入安装存放的下载安装文件目录的bin文件夹 运行 ./mongod

打开另外一个终端，同样是进入bin 目录，运行 ./mongo

如何不使用刚才新建的data路径需要再起动时制定data路径这与windows类似
mongod --dbpath <path to data directory>









##MongoDB 数据库命令
mongo 程序启动时会默认选定 test 数据库。如果你希望知道当前选定的数据库，使用下述命令来打印出当前的数据库名：
在mongo shell命令下，
1，db     //显示当前数据库
2，show dbs  //显示所有数据库
3，use mydb //切换数据库 如果不操作就离开的话这个库系统会自动删除，如果插入内容此库自动建立
4，db.dropDatabase();  //删除所在数据库
5，show collections;      //查看‘表’
6，db.mytable.drop();
7，插入数据：  db.users.insert({name:"lixiaowei",age: 30});    说明：如果表users不存在 则自动创建。
   db.createCollection(name, options)

-------------------查询操作------------------------
8，查询所有数据：db.users.find();

    db.users.find().pretty()  //结果显示在一个格式化的方式，可以使用 pretty() 方法.

9，按条件查询：db.users.find({name:"lixiaowei"});
    db.mycol.find({"likes":"tutorials point"}).pretty() ===>where likes = 'tutorials point'
    db.mycol.find({"likes":{$lt:50}}).pretty() ===> where likes < 50
    db.mycol.find({"likes":{$lte:50}}).pretty()===> where likes <= 50
    db.mycol.find({"likes":{$gt:50}}).pretty() ===> where likes > 50
    db.mycol.find({"likes":{$gte:50}}).pretty()===> where likes >= 50
    db.mycol.find({"likes":{$ne:50}}).pretty() ===> where likes != 50


    在  find() 方法，如果通过多个键分离','，那么 MongoDB 处理 AND 条件。AND 基本语法如下所示：

    >db.mycol.find({key1:value1, key2:value2}).pretty()

    OR条件的基础上要查询文件，需要使用$or关键字。OR 基本语法如下所示：

    >db.mycol.find(
       {
          $or: [
             {key1: value1}, {key2:value2}
          ]
       }
    ).pretty()

    下面给出的例子将显示有像的文件大于100，其标题是"MongoDB Overview"或者是'yiibai' 。
    等效于 SQL where子句 为 where likes>10 AND (by = 'yiibai' OR title = 'MongoDB Overview')

    >db.mycol.find("likes": {$gt:10}, $or: [{"by": "yiibai"}, {"title": "MongoDB Overview"}] }).pretty()


    请注意_id字段始终显示在执行find()方法，如果不想这个字段，那么需要将其设置为0
    db.mycol.find({},{"title":1,_id:0})  //此方法不会显示_id 只会显示title

10， 查询统计：db.users.count()  or  db.users.find().count();

11，按条件查询统计：db.users.find({name:"lixiaowei"}).count();

12，查询固定条数记录：db.users.find().skip(1).limit(2);  从第二条开始查询2 条记录。

13，in 查询：db.users.find({age:{$in:[32,33]}});

14，排序查询： db.users.find().sort({age:-1});    -1表从大到小排序，即降序（desc）；1表升序（asc）

15，db.users.find('this.age>"31"',{name:1});  等同于 SELECT name FROM user WHERE age >30

-------------------删除操作------------------------

16、删除所有数据：db.users.remove({})；

17、删除一条符合条件的记录：
        db.users.remove({age:"29"});
        db.users.remove({age:{$lt:"30"}});  删除age 小于30 的记录

 说明：$gt : >              ------（Greater than 的首字母）

       $gte : >=            ------（Greater than or equal 的首字母）

       $lt :<               ------（Less than 的首字母）

       $lte :<=             ------（Less than  or equal  的首字母）

       $ne : !=             ------（Not equal  的首字母）


-------------------更新操作------------------------

 18、db.users.update({name:"xiaobai"},{$set:{age:30}});

     等同于sql的:update  users  set  age= 30  where name="xiaobai";

     MongoDB默认将只更新单一的文件，来更新多个你需要设置参数置'multi' 为true

     db.mycol.update({'name':'dongzhi'},{$set:{'title':'New MongoDB Tutorial'}},{multi:true})


    db.mycol.save(
       {
          "_id" : ObjectId(5983548781331adf45ec7), "title":"Yiibai New Topic", "by":"Yiibai"
       }
    )

-------------------distinct去掉重复值------------------------

19、db.users.distinct('name',{age:{$gt:"30"}});
    等同mysql 的：select distinct name  from users  where age>30



20. 链接mongoLab  https://mlab.com/home
https://api.mlab.com/api/1/databases/mydb/collections/todos?apiKey=8fPm07m0sU6M-hDrOgREFy3cXy6uUxXo


