const template = require('art-template');
const http = require('http');
const fs = require('fs');

var app = http.createServer(function (req, res) {
    // fs.readFile('./index2.html', function (err, data) {
    //     res.setHeader('Content-Type', 'text/html');
    //     // console.log(data)
    //     var htmlStr = template.render(data.toString(), {
    //         content: "内容"
    //     })
    //     res.end(htmlStr);
    // })

}).listen('3000', function () {
    console.log('3000...........');
})


http.get('/demo',(res)=>{
    console.log(res);
})









