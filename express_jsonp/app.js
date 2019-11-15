var express = require("express");
var path = require("path")
var app = express();

//var bodyParser=require('body-parser')

//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({extended:false}))
//处理静态文件的目录
app.use(express.static(path.join(__dirname, 'www')))
//处理使用模板的后缀名
app.engine("html",require("express-art-template"));
//处理渲染模板文件的路径
app.set("views",path.join(__dirname,"views"));
//var routers = require("./router")
//挂在路由
//app.use(routers)

app.all('*', function(req, res, next) {
	//表示请求源是来自所有的
	res.header("Access-Control-Allow-Origin", "*");
	//表示请求是ajax异步请求方式
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	//设置请求方式为put post get ....
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	//告知该网站使用何种语言或者框架所写的
	res.header("X-Powered-By",' 3.2.1')
	//设置请求头数据格式和字符编码
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
  });
app.get('/', function(req, res){
 // res.render("index.html");

//    res.jsonp({name:"aaa",age:"bbb"})
    res.jsonp({name:"aaa",age:20,sex:"female"})
});


app.listen(3000,function(err){
    if(!err){
        console.log("localhost:3000")
    }
});