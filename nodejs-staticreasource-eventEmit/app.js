const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path")
const app = http.createServer((req,res)=>{
    const pathUrl = url.parse(req.url).pathname;
    var extname=path.extname(pathUrl);

    console.log(extname)



    if(pathUrl=="/"){
        fs.readFile("./index.html","utf-8",function(err,data){
            if(!err){
                res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
                res.end(data);
            }
            res.end("404")
        })
    }
    if(pathUrl!="/favicon.ico"){
        fs.readFile("./static/"+pathUrl,"utf-8",function(err,data){
            if(!err){
                if(/\.css$/.test(pathUrl))
                res.writeHead(200,{"Content-Type":"text/css;charset=UTF-8"});
                res.end(data);
            }
            res.end("404")
        })
    }
   
    

})
app.listen("3000",function(err){
    if(!err){
        console.log("localhost://3000");

    }
})
