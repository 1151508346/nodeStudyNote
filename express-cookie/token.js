const jwt = require("jsonwebtoken");
var secret = "aa";    //加盐操作
function getToken(targetJson,secret){
    var token = jwt.sign(targetJson,secret);
    return token;
}

function parseToken(token,secret,callback){
    jwt.verify(token,secret,function(err,decoded){
        if(!err){
            callback(decoded)
        }
    })
}
module.exports = {getToken,parseToken}