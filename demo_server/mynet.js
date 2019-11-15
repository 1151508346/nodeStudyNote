var net = require('net');
// 创建tcp服务器
var count = 0;//当前聊天室的人数
var user = {} //存储当前聊天室的用户
var server = net.createServer(function (scoket) {
    scoket.write('welcome to net chat,now' + count + 'at this time . your name');

    scoket.on('data', function (data) {
        console.log(data);
    })
})

server.listen('3000', function (err) {
    if (err) {

    }
    console.log('server listening on 3000');
})