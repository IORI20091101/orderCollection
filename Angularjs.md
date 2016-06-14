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

### 使用$resource 自己封装

### meta标签 <meta name="fragment" content="!"> 解决seo问题

### 防止ui抖动， ng-cloak ng-bind


### 使用$interpolate服务来手动编译模板

### 使用ng-messages 来进行表单验证错误处理

### 使用Angular.module('myApp',[]).run(['$rootScope',function($rootScope) {}]) 来监听路由变化

### resolve:{} 列表中的元素会被注入到控制器中

### 使用行内注入声明不需要显示的调用$injector