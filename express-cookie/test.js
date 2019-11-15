var queryString = require("querystring")
// var str = "name=jack&age=20";
// const json  = queryString.parse(str)
// console.log(json.name)
var url = require("url");
var path = "http://localhost:3000/api?name=jack&age=20";
var json = url.parse(path)

console.log(queryString.parse(json.query))
