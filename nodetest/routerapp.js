var express = require("express");
var app = express();
var user  =require("./routerapp/user")
var news  =require("./routerapp/news")
// app.use("/user",user)
// app.use("/news",news)
require("./routerapp/index")(app);

app.listen(3000,function(err){
    console.log("localhost:3000");
})