//引入http模块
const http = require('http');
//引入文件模块
const fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type":"text/html;charset='utf-8'"});

    let pathUrl = req.url;
    if(pathUrl == '/'){
        pathUrl = 'index.html';
    }

    if(pathUrl != '/favicon.ico'){
        fs.readFile('static/' + pathUrl, (err, result) => {
            if(err){
                console.log('404');
                return;
            }else{
                res.writeHead(200, {"Content-Type":"text/html;charset='utf-8'"});
                res.write(data);
                res.end();
            }
        });

    }
    console.log('url is', req.url);
    res.write('hello nodejs');
    res.end(); // 结束响应
}).listen('8001');
