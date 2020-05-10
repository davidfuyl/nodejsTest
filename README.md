## npm list //列出所有安装的npm模块
## npm -g install module_name
## npm -v // 查看npm版本
## npm info jquery / npm info angular // 查看安装的模块的版本信息
## npm -g install module_name --save // 安装模块并写入到package.json文件中
## npm uninstall //卸载
## npm install jquery@1.8.2 //安装指定版本

创建package.json

npm init
npm init --yes

npm install md5-node --save  // dependencies
或者 npm install md5-node --save-dev  ///devDependencies
会将安装的模块写入到package.json文件中，供别人下载使用,
这两个的区别是：devDependencies 除了会下载应用所需要的依赖外，还会额外下载测试和文档框架
md5-node 第三方加密模块
^表示第一位版本号不变后面两位去最新的
~表示前两位不变，最后一个取最新
*表示全部取最新

淘宝镜像 npm.taobao.org

http://nodejs.cn/api/

nodejs的File System模块提供了很多种方法，这些方法大致可以分别为两类：
一类是异步+回调的； 一类是同步的。
其中stat就是属于前者，statSync就是属于后者

1.异步版：fs.stat(path,callback):
    path是一个表示路径的字符串,callback接收两个参数(err,stats),其中stats就是fs.stats的一个实例；

2.同步版：fs.statSync(path)
   只接收一个path变量，fs.statSync(path)其实是一个fs.stats的一个实例；

3.再来看fs.stats有以下方法:
    stats.isFile()
    stats.isDirectory()
    stats.isBlockDevice()
    stats.isCharacterDevice()
    stats.isSymbolicLink() (only valid with fs.stat())
    stats.isFIFO()
    stats.isSocket()

cnpm i ejs --save

nosql 没有行，列的概念，而是用json来存储数据

数据集--> 若干个集合collection --> 若干个 document

MongoDB 介于关系型和非关系型数据库之间

nodejs 路由跳转 './login',

