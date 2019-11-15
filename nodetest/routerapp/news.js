var express = require("express");
var router = express.Router()
router.get("/",function(req,res){
    res.send("news");
})
router.get("/index",function(req,res){
        res.send("news/index");
})
module.exports = router;