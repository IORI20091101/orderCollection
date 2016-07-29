### 使用Backbone的注意点，

#### 如果视图监听model的变化来render 不可以用on方法，要使用listenTo 并且在new 新的视图时使用stopLisening 结束监听避免产生僵尸视图

#### 使用Marionette js 来做一些backbone缺少的功能减少样办代码，别提供内存管理等包括解决以上问题。

#### 基于backbone https://github.com/marionettejs/backbone.marionette

#### thorax

#### backbone.validation

```javascript
    var root = this;
    var previousBackbone = root.Backbone;
    Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
}

```

#### backbone.noConflict()

#### backbone-super

#### 测试 jasmine Qunit Sinonjs