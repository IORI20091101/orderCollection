npm install --save otherpackage    //保存到package.json

使用node－inspector进行debug
node --debug app2.js

node-inspector



//命令
npm publish  //发布模块
npm install -g express //安装express

//要想发布脚本在package.json中添加
"bin":"./path/to/script" //指向可执行的脚本或二进制文件

npm search realtime //搜索模块

npm view socket.io //查看packag.json 已经相关属性

var a = function(a,b,c);
a.length == 3   //true

//循环便利
[1,2,3].forEach(function(v) {
    console.log(v);
})

[1,2,3].map(function(v) {
    return v*2
})

' hello '.trim();  ==> 'hello'

//bing 类似 $.proxy
function a() {
    this.hello == 'world';
}

var b = a.bind({hello: 'world'});
b();


//function name
var a = function woot() {};
a.name == 'woot';


//函数加上名字报错信息中有显示便于调试
var woot = function buggy() { throw new Error() }
undefined
woot();
VM513:2
buggy   @   VM513:2
(anonymous function)    @   VM514:2
InjectedScript._evaluateOn  @   VM81:883
InjectedScript._evaluateAndWrap @   VM81:816
InjectedScript.evaluate @   VM81:682


//存取器
访问属性 __defineGetter__
设置属性 __defineSetter__


//错误进程处理器
process.on('uncaughtException', function(err) {
    console.error(err);
    process.exit(1);
})

//全局变量
global：任何属性都可以被global全局对象访问
process： 所有全局执行上下文都在process对象中

//node中的事件监听
var EventEmitter = require('events').EventEmitter,
    a = new EventEmitter;
a.on('event', function() {
    console.log('event called');
})
a.emit('event');
//--------------
var EventEmitter = process.EventEmitter, MyClass = function() {};
MyClass.prototype.__proto__ = EventEmitter.prototype;
//MyClass所有的实例都具有了事件功能
var a = new MyClass;
a.on('xxx', function() {
    //todo
})


//读取文件路径同步和异步
var fs = require('fs');
//sync :
fs.readdirSync(__dirname);

//async:
function async(err, files) {
    console.log(files);
}
fs.redir('.', async);



process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
    process.stdout.write('data:' + chunk);
});

process.stdin.on('end', function(){
    process.stdout.write('end');
});

//标准输出
console.log('hello world');
process.stdout.write('hello world');


//node 关于process一些参数
process.argv

__dirname执行文件时该文件所在的目录
process.cwd() //获取当前工作目录
process.env.NODE_ENV; //获取环境变量
process.env.SHELL;
process.exit(1); //退出程序

process.version //正在运行的node的版本号
process.installPrefix //安装时指定的安装目录
process.platform //运行的平台名称
process.uptime //当前进程运行了多少秒
process.pid
process.execPath //node程序的执行路径
pricess.memoryUsage() //当前进程的内存使用情况
//进程和操作系统通信通过信号例如要终止进程
process.on('SIGKILL',function() {
    //信号已收到
})


//stream
fs.readFile  fs.writeFile 都是一次性操作完成
fs.readFile('my.txt', function(err, contents) {})
该方法必须等到文件读取完毕，载入到RAM，可用情况才会触发，
var stream = fs.createReadStream('my.txt');
stream.on('data', function(chunk) {
    //处理文件部分内容
});
stream.on('end', function(chunk) {})
对于读取上传大文件可以大大提速上传过程。


//监听文件变化
fs.watchFile(process.cwd() + '/watchFile.js', function() {
    console.log('fs has changeed');
});

//telnet 网络协议已经基本不用可以测试
直接在控制台输入 telnet


var utils = require('utils');
var EventEmitter = require('events').EventEmitter;
function Server() {}
//utils 有 inherits方法可以将EventEmitter的方法添加到Server中
utils.inherits(Server, EventEmitter);
var s = new Server();
s.on('abc', function() { console.log('xx') });
