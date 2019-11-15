const express = require("express");
const expressSession  = require("express-session");
const MongodbStore = require("connect-session");
const app = express();
app.use(expressSession({
    secret:"key", //随便写的string，用作服务器生成session前面来进行加密
    name:"connect_id",// 保存本地cookie 的一个名字，默认为connect_id ，
    resave:false,//强制保存session即使它没有发生变化，默认为true建议设置为fasle,
    saveUninitialized:true , //强制将未初始化的sesson进行存储，默认值为true 建议是设置成true，
    cookie:{
        maxAge:50000, //过期时间,

    } ,
    // 强制重新设置cookie ，每次请求都重新设置cookie 
    //防止过期时间太短，而用户在操作的时候已经超过了过期时间，出现自动退出
    // 当请求时 会将session保存在mongodb数据库中 会自动生成一个session表（集合）
    rolling:true ,
    store:new MongodbStore({
        url:"",
    }) 

}))
app.use("/",function(req,res){
    if(req.session.username){
        res.send (res.session.username+"登录成功");
    }
})
app.use("news",function(req,res){
    if(req.session.username){
        res.send(res.session.username+"news 登录成功")
    }
})
app.use("/login",function(req,res){
    //设置session 用户表示用户登录的状态
    req.session.username = "zhansan"
    res.send("登录成功");
});

/**
 * req.session.destroy() //销毁session
 * req.session.cookie.maxAge = 20000 //重新设置cookie过期时间
 * 
 */
app.use("/login_out",function(req,res){
    // 销毁session
    // req.session.distroy();
    // req.session.cookie.maxAge = 0
})



app.listen(3000,function(err){
    if(!err){
        console.log("localhost:3000")
    }
})