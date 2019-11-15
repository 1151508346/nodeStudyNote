let querystring = require('querystring');
var str = "name=Jack&age=30&sex=female";
var strobj = "{'name':'Jack','age':20}";
console.log(querystring.parse(str).name)
console.log(querystring.parse(str))



