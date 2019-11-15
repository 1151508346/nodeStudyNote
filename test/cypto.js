var crypto = require("crypto");

var password = "123456";
var md5=crypto.createHash("md5");
var result=md5.update(password).digest("hex");

console.log(result)

