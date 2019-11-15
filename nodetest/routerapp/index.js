var express = require("express");
var router = express.Router;
var user = require("./user")
var news = require("./news");
module.exports = function(app){
    
    app.use("/user",user)
    app.use("/news",news)
    app.get("/",function(req,res,next){
        res.send("首页");
        
    })
    app.use("*",function(req,res){
        res.redirect(302,"/user")
        // res.send("404")
    })
     
}