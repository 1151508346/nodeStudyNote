var  express = require('express');
 var router = express.Router();
var app = express();
console.log(router);

// 把路由容器挂在到app上
app.use(router);
router.get('/',function(req,res){
	res.send(req.query);
	console.log(req.query);
	// console.log(req.render);必须与模板引擎进行配置使用
	// res.redirect('/123');
})
app.listen('3000',function(err){
	console.log('127.0.0.1:3000');
});

