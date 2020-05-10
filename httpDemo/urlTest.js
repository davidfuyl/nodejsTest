const http = require('http');
const url = require('url');

http.createServer(function(req, res){

    /*console.log(req.url);

    const parseUrl = url.parse(req.url, true);

    console.log('parseurl is:', parseUrl);*/

   /* console.log(parseUrl.query.id);
    console.log(parseUrl.query.name);*/
    res.writeHead(200, {"Content-Type":"text/html;charset='utf-8"});

    //解析：http://localhost:8003/news?id=123&name=david
    if(req.url !== '/favicon.ico'){
        console.log('url is : ', req.url);
        const parseUrl = url.parse(req.url, true);
        const name = parseUrl.query.name;
        const id = parseUrl.query.id;
        console.log('name and id is', name, id);

        /*url is :  /news?id=123&name=david
            name and id is david 123*/
    }
    res.write('hello nodejs111122223333');
    res.end();

}).listen('8003');

// cnpm -g install supervisor 安装supervisor设置修改代码自动重启

