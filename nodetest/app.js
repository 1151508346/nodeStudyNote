const express  = require('express');
const app = express();
const path = require("path")
const fs = require('fs');
	

app.use("/public",express.static(path.resolve(__dirname,"public")));

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

app.use('/api/data',function(req,res){
	
	// fs.readFile('index.html',function(err,data){
	// 	// console.log(data);
	// 	res.status(200);
	// 	res.setHeader("Content-Type","text/html");

	// 	res.send(data);
	// })
	var sendData = {
		name:"aaa",
		age:20,
		title:"标题",
		content:"内容",
		one:{
			id:1,
			name:"one",
			address:"陕西省安康市高新区江北校区安康学院"
		},
		two:{
			id:2,
			name:"two",
			address:"陕西省咸阳市礼泉县南坊镇"
		}
	
	};
	res.json(sendData);
	console.log(sendData);
	
})
app.listen(3000,function(err){
	console.log("localhost:3000")
})

// app.listen('3000',function(err){

// 	if(err){
// 		throw new Error("出现错误了")
		
// 	}
// 	console.log('localhost:3000........');
// })