构建Angularjs应用的几个原则

#### 一，需要解决安全问题

* 禁止未授权用户访问数据
* 加密链接防止网络监听
* 防止跨站脚本攻击XSS 以及跨站请求攻击 XSRF
* 阻止JSON注入攻击
* 客户端安全创建security服务
* 使用resolve函数

#### 二写好测试

* 单元测试 jasmine
* 端对端测试 protractor

#### 三，表单验证

### 使用$resource 自己封装 使用Restangular 插件来发送请求

### meta标签 <meta name="fragment" content="!"> 解决seo问题

### 防止ui抖动， ng-cloak ng-bind


### 使用$interpolate服务来手动编译模板

### 使用ng-messages 来进行表单验证错误处理

### 使用Angular.module('myApp',[]).run(['$rootScope',function($rootScope) {}]) 来监听路由变化

### resolve:{} 列表中的元素会被注入到控制器中

### 使用行内注入声明不需要显示的调用$injector

### $provide.decorator修饰器

### 发请求时 对于xsrfHeaderName xsrfCookieName

### 创建无服务应用 ,使用Amazon AWS DynamoDB, SNS简单的通知服务，SQS队列服务， S3存储服务，STS令牌服务</SPAN>的无服务应用，

### 使用Firebase   AngularFire创建无服务应用

### angularjs 动画TweenMax TweeenLite

### 使用优秀的angularjs扩展  AngularUI ui-router ui-utils angular-touch

### 使用Cordova 构建原生的应用程序 使用Yeoman 测试和开发

### 如果有本地化的需要使用angular-gettext

### 使用$sce进行严格的上下文转义

### 关于IE 使用ie-shive  headers Cache-Control: no-cache 防止ie自动缓存xhr请求

### 加上<meta name="fragment" content="!"> 来做seo优化,服务器端需要做的事情node Express中间件 apache重写URL  Nginx带了URL

### 获取html快照的方法 使用PhantomJS zombie.js, 还可以使用Grunt工具 grunt-html-snapshot,  或者 Prerender.io

### 尝试构建chrome应用


### 优化Angularjs
    * 使用bindOnce angular-bindonce 可以使得监视器在在数据可用时被移除,
    * 在controller中使用过滤器 $filter('currency')($scope.receipt)  防止在视图中运行两遍过滤器
    * 理解和使用undercolre.js 或者Lo-Dash中的 memoize 函数，  throttle节流函数
    * 使用模板缓存工具 grunt-angular-templates
    * 构建工具 Lineman

