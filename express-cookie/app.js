const express = require('express')
const cookieParser = require('cookie-parser');
const app = express();
const {getToken,parseToken} = require("./token");
//sign 表示加密
app.use(cookieParser('sign'));


var secret = "123456" //给将要生成的token进行加盐操作
app.get('/', (req, res) =>{ 
    //生成token（签名）
    var targetJson = {
        name:"Jack",
        password:"123456"
    }
    var token = getToken(targetJson,secret)

    //设置cookie
    res.cookie("userinfo",token,{maxAge:new Date().getTime()+60000,signed:true,httpOnly:false })
    res.send('Hello World!')
    });
    app.get("/getcookiename",function(req,res){
            /**
             * 如果在引入app.use(cookieParser('sign'));
             * 这块写入加密的话，就需要使用res.signCookies来获取cookie
             * 没有进行加密的话就需要使用res.cookies来获取cookie
             */
        var userinfo =  req.signedCookies.userinfo;
            if(userinfo){
            //    在这块获取到的是加密后的cookie 里面报错这用户名和密码的相关信心，如果需要进行解析的话需要使用
            parseToken(userinfo,secret,function(decode){
                res.send(decode)
            })
        }
    });   

app.listen(3000, () => console.log(`localhost:3000`));