const ejs = require('ejs');
const http = require('http');


const data = ['2', '3', '5'];
const str = '<h1>hello</h1>'

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html; charset='utf-8'"});
    ejs.renderFile('./views.ejsDemo.js', {data:data, str:str}, (err, data)=> {
        if(err){
            console.log('error: ', err);
        }
        console.log(data);
        res.send(data);
    })
});

/*
* <%%>流程控制标签
* <%=%>输出标签（html标签不会被解析）
* <%-%>输出标签（html标签会被解析）
* */
