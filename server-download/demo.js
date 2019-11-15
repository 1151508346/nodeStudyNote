
var http = require('http');
var fs = require('fs');
var app = http.createServer(function (request, response) {
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    // console.log(request.url);
    // response.write(request.url);
   

    response.writeHead(200, { 'Content-Type': 'text/html' });

    var html = fs.readFileSync("./index.html" );
    // console.log(html.toString());


    // 发送响应数据 "Hello World"
    response.end(html);
}).listen(8080, function (err) {
    if (err) {
        console.log(err);
        throw err;
    }
});


// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8080/');

