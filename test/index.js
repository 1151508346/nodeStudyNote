
var fs = require('fs');
var http = require('http');
var a = require('./a');
http
	.createServer(function(req,res){
	// var url = req.url;
	// 	if(url=="/"){
	// 		fs.readFile('./www/index.html','utf8',function(err,data){
	// 			res.end(data);
	// 		})
	// 	}
	// 	else if(url.indexOf('/bower_components')===0){
	// 			fs.readFile("./www/"+url,'utf8',function(err,data){
	// 			res.end(data);
	// 		});
	// 	}
	if(req.url=='/'){
		res.end(a.show());
	}

})
	.listen(3000,function(err){
		console.log('127.0.0.1:3000......');
})