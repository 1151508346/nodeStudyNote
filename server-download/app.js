var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var fs = require("fs")
app.use(express.static(path.resolve(__dirname,"www")))

app.set("views",path.resolve(__dirname,"views"))

app.post("/shipin",function(req,res){
    res.download("./www/shipin.mkv",function(err){
        if(err){
            res.setHeader("Content-type","text/html;charset:utf-8");
            res.end("you visit file is not exit")
            return;
        }
        console.log("下载成功")
    })
    
})
app.get("/shipin",function(req,res){
    res.download("./www/shipin.mkv",function(err){
        if(err){
            res.setHeader("Content-type","text/html;charset:utf-8");
            res.end("you visit file is not exit")
            return;
        }
        // console.log("下载成功")
    })
    
})
app.get("/a",function(req,res){
    res.download("./www/a.txt",function(err){
        if(err){
            res.setHeader("Content-type","text/html;charset:utf-8");
            res.end("you visit file is not exit")
            return;
        }
        console.log("下载成功")
    })
    
})


app.use("/",function(req,res){
    var result = fs.readFileSync("./index.html");
    res.send(result.toString());
})


app.listen("3000",function(err){
    if(err){
        throw new Error()

    }
    console.log("http://localhost:3000");
})