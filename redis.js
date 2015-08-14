在你准备把使用了node_redis API的Node.js程序部署到生产环境中时，可能要考虑下是否使
用Pieter Noordhuis的hiredis模块（https://github.com/pietern/hiredis-node）。这个模块会显著提升
Redis的性能，因为它充分利用了官方的hiredis C语言库。如果你装了hiredis，node_redis API会自
动使用hiredis替代它的JavaScript实现。


redis命令文档：
    http://redis.io/commands
    http://redisdoc.com/

windows下安装redis
下载地址https://github.com/dmajkic/redis/downloads。下载到的Redis支持32bit和64bit。根据自己实际情况选择，我选择32bit。把32bit文件内容拷贝到需要安装的目录下,比如：D:\dev\redis-2.4.5。

打开一个cmd窗口，使用cd命令切换到指定目录（D:\dev\redis-2.4.5）运行 redis-server.exe redis.conf 。运行以后出现如下界面。

重新打开一个cmd窗口，使用cd命令切换到指定目录（D:\dev\redis-2.4.5）运行 redis-cli.exe -h 127.0.0.1 -p 6379，其中 127.0.0.1是本地ip，6379是redis服务端的默认端口。运行成功如下图所示。
这样，Redis windows环境下搭建已经完成，是不是很简单。


要启动redis客户端，打开终端，输入命令Redis命令行：redis-cli。这将连接到本地服务器，现在就可以运行各种命令了。
$redis-cli
redis 127.0.0.1:6379>
redis 127.0.0.1:6379> PING

PONG

在上面的例子中，我们连接到本地机器上运行的Redis服务器，并且执行ping命令，来检查是否服务器正在运行。

下面的示例演示了如何连接到Redis主机：127.0.0.1，端口：6379 上的远程服务器，并加上验证密码为：mypass。
$redis-cli -h 127.0.0.1 -p 6379 -a "mypass"
redis 127.0.0.1:6379>
redis 127.0.0.1:6379> PING

PONG

命令：
    SET dongzhi
    GET dongzhi
    INCR dongzhi
    keys * 列出所有
    HSET dongzhi test1 //设置
    HGETALL dongzhi   //获取
    HDEL dongzhi //删除
    HEXISTS dongzhi //判断是否存在

    RPUSH dongzhi.jobs job1
    LPUSH donghzi.jobs job2
    LRANGE dongzhi.jobs 0 -1   //此方法类似 slice 不过第二个参数为-1取所有的值

    SADD dongzhi "a number"
    SMEMBERS dongzhi //获取
    SREM dongzhi //删除




语法
redis 127.0.0.1:6379> SET dongzhi redis
OK

redis 127.0.0.1:6379> GET dongzhi

redis 127.0.0.1:6379> DEL dongzhi
(integer) 1
在上面的例子中DEL是命令，而yiibai是键。如果键被删除那么输出该命令将是 (integer) 1，否则它是 (integer) 0




1， DEL key
    此命令删除键，如果存在
    Redis的DEL命令用于删除redis中现有键。
    返回值
    被删除的键的数目。


2   DUMP key
    该命令返回存储在指定键的值的序列化版本。

3   EXISTS key
    此命令检查该键是否存在。Redis EXISTS命令被用来检查键是否存在于redis。
    返回值
    整数值 1, 如果键存在。0, 如果键不存在。


4   EXPIRE key seconds
    Redis Expire命令用于设定键有效期。到期时间后键不会在Redis中使用。
    返回值
    整数值1或0，1, 如果设置的键超时。0, 如果键不存在，或者未设置超时。

    例子：首先，在Redis创建一个键，并设置一定的值。
        redis 127.0.0.1:6379> SET yiibai redis
        OK
        现在设置以前创建的键超时
        redis 127.0.0.1:6379> EXPIRE yiibai 60
        (integer) 1
        在上面的例子中键yiibai被设定一分钟(或者60秒)的时间。 1分钟后，键会自动失效。


5   EXPIREAT key timestamp
    指定的键过期时间。在这里，时间是在Unix时间戳格式


6   PEXPIRE key milliseconds
    设置键以毫秒为单位到期


7   PEXPIREAT key milliseconds-timestamp
    设置键在Unix时间戳指定为毫秒到期


8   KEYS pattern
    例子
    查找与指定模式匹配的所有键
    首先，在Redis创建一个键，并设置一定的值。
        redis 127.0.0.1:6379> SET tutorial1 redis
        OK
        redis 127.0.0.1:6379> SET tutorial2 mysql
        OK
        redis 127.0.0.1:6379> SET tutorial3 mongodb
        OK
        现在Redis带有键搜索从关键字教程开始

        redis 127.0.0.1:6379> KEYS tutorial*
        1) "tutorial3"
        2) "tutorial1"
        3) "tutorial2"
        Redis要获得所有键的可用列表仅只是使用*

        redis 127.0.0.1:6379> KEYS *
        1) "tutorial3"
        2) "tutorial1"
        3) "tutorial2"


9   MOVE key db
    移动键到另一个数据库
    整数值1或0，1, 如果键被移动。0, 如果键没有被移动
    例子
        首先，在Redis创建一个键，并设置一定的值。
        redis 127.0.0.1:6379> SET tutorial1 redis
        OK
        Redis的默认第0数据库被选中，所以现在我们正朝着第二个数据库生成的键移动。

        redis 127.0.0.1:6379> MOVE tutorial1 1
        1) (integer) 1


10  PERSIST key
    移除过期的键
    整数值1或0
    1, 如果超时则删除键。
    0, 如果key不存在或不具备相关的超时时间。

11  PTTL key
    以毫秒为单位获取剩余时间的到期键。

12  TTL key
    获取键到期的剩余时间。

13  RANDOMKEY
    从Redis返回随机键

14  RENAME key newkey
    更改键的名称

15  RENAMENX key newkey
    重命名键，如果新的键不存在

16  TYPE key
    返回存储在键的数据类型的值