var http = require('http');

// var server = http.createServer(function (req, res) {
//     console.log(req.url);
//     res.end('hello word');
// })


var server = http.createServer();
server.on('request', function (req, res) {
    // console.log('req.url');
    console.log(res.end());
})
server.listen(3000, function (err) {
    if (err) {
        console.log('启动服务失败');

        throw err;
    }
    console.log('服务启动：127.0.0.1:3000');
})