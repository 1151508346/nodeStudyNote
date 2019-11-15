var fs = require('fs');
var http = require('http');

//创建服务                  req请求变量 res响应变量

var myserver = http.createServer(function (req, res) {
    // console.log(req, res);
    // res.end('<h1 style="color:red;">helloword</h1>');
    var url = req.url;
    var htmlcontent = fs.readFileSync("." + url);
    res.write(htmlcontent);
    res.end();//响应结束（写入文件结束）
});
// 监听
myserver.listen('3011', function (err) {
    if (err) {
        console.log('失败了');
        throw err;
    }
    console.log('服务器已经开启动,端口号为:3000');
})