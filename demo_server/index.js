let fs = require('fs');
let http = require('http');
let quertstring = require('querystring');
let url = require('url');
//创建服务
let server = http.createServer(function (req, res) {
    let urlobj = url.parse(req.url);
    if (urlobj.pathname == "/index.html") {
        // fs.readFile('www/aaa.html', "utf8", function (err, data) {
        //res.writeHead(200, { "Content-type": "text/html" });
        //     if (err) {
        //         res.end('请求失败了');
        //         throw err;
        //     }
        //     res.end(data);
        // });
        fs.createReadStream('./www/aaa.html').pipe(res);







    }
})
server.listen(3000, '127.0.0.1', function (err) {
    if (err) {
        console.log('service is failed');
        throw err;
    }
    console.log('service  is success, hostname:127.0.0.1,port:3000');
})