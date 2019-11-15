let fs = require('fs');
let http = require('http');
let querystring = require('querystring');
let url = require('url');

//创建服务
let server = http.createServer(function (req, res) {
    let urlobj = url.parse(req.url);
    let pathname = urlobj.pathname;

    let filename = ""
    if (pathname == "/") {
        filename = "login.html";
    } else if (pathname == "/checkuser.html") {
        if (urlobj.query) {
            let params = querystring.parse(urlobj.query);
            if (params.username == "admin" && params.password == "123456") {
                filename = "index.html";
            } else {
                filename = "404.html";
            }
        }
    } else {
        filename = "404.html";
    }
    // fs.readFile(filename, 'uft8', function (err, data) {
    //     if (err) {
    //         console.log(err);
    //         throw err;
    //     }
    //     res.end(data);
    // })

    // 读取filename响应给客户端
    fs.createReadStream(filename).pipe(res);
})
server.listen(3000, '127.0.0.1', function (err) {
    if (err) {
        console.log('service is failed');
        throw err;
    }
    console.log('service  is success, hostname:127.0.0.1,port:3000');
})