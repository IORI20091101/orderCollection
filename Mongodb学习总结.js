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