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