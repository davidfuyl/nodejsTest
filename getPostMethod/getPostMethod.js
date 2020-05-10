const http = require('http');

const httpServer = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"});
    //打印请求的方式：get, post
    const method = req.method.toLowerCase();
    console.log('request method is: ', method);
    //console.log('request method: ', req.method);
    res.write('hello');
    res.end();
});

httpServer.listen(8001);