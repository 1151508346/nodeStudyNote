var jwt = require("jsonwebtoken");

var secret = "aa";

var token = jwt.sign({
    name:"Jack",
    password:"123456"
},secret);
/**
 * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFjayIsInBhc3N3b3JkIjoiMTIzNDU
2IiwiaWF0IjoxNTY2OTA1OTY3fQ.YfcDC2o3IDvGEUv1OEX9wJal4unb_kclJDq-TTGzU5o
 */
console.log(token);

jwt.verify(token,secret,function(err,decoded){
    if(!err){
        console.log(decoded)
    }
})
