###高性能网站建设指南

* 减少HTTP请求

* 使用内容分发网络CDN

* 为组件添加长久的Expires头

* 压缩将能和样式表

* 使用LINK标签将样式表放在文档HEAD中

* 将脚本放到底部

* 避免css表达式

* 将js和css文件放到外部文件

* 减少DNS查找，使用Keep-Alive和较少的域名来减少DNS查找

* 对javascript源代码进行精简和压缩使用JSMin 和Gzip进行压缩和精简

* 避免重定向，了解一下信标。

* 删除重复脚本，确保脚本只被包含一次。

* 配置或者删除ETag，服务器在检测缓存组件是否与原始服务器上的组件匹配时，发送条件请求，
    * 比较最新的修改日期 last-modified
    * 比较实体标签 ETag

* 使ajax可缓存，最好具有长久的Expire头