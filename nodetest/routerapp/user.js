var express = require("express");
var router = express.Router()
router.get("/",function(req,res){
    res.send("user");
})
router.get("/index",function(req,res){
        res.send("user/index");
})
module.exports = router;