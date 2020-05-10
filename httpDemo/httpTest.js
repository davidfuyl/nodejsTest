//引入http模块
const http = require('http');

//使用http创建服务
//发送HTTP头部
//HTTP状态值: 200 : OK
http.createServer(function(req, res){
    //设置HTTP头部，状态码是200，文件类型是html，字符集是utf8
    console.log('url is', req.url);

    res.writeHead(200, {"Content-Type":"text/html;charset='utf-8'"});
    res.write('hello nodejs');
    res.write('hello');
    res.write('hello, this is my first node demo');
    res.end(); // 结束响应
}).listen('8001');

<editDocDialog @showEditDialog="showEditDialog" :editDocDialog="editDocDialogShow" :formDetailData="docDetailInfos" :lang="lang"></editDocDialog>
