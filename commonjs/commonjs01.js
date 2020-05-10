/*
* commonjs nodejs模块化 自定义模块化
* 可以将一些公共的方法封装成一个模块，然后module.exports = app暴露出去
* 供其他需要的模块使用
*
* */

const http = require('http');

//首先引入自定义的外部模块simpleModuleTest.js，然后才可以上使用里面定义的方法属性
//const simpleModuleTest = require('./simpleModuleTest.js');
const simpleModuleTest = require('./simpleModuleTest');

const app = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type":"text/html;charset='utf8'"});

    console.log(simpleModuleTest.str);

    console.log(simpleModuleTest.userInfo);

    console.log(simpleModuleTest.userInfo.sayHi());//调用自定义模块中的方法

    console.log(simpleModuleTest.userInfo.add(2,3)); // 5

    res.write('hello nodejs');

    res.end();
});

app.listen(8004);

//app.listen(8004, 127.0.0.1); 第二个参数可以指定开启的ip地址