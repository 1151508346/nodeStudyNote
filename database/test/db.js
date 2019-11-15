const mysql = require("mysql");
const conn = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"12345678",
    database:"zank",

});
conn.connect();
let page = 1;
let limitcount = 5;
let min = (page-1) *limitcount

const sql = "select * from user limit " +(page-1)+","+limitcount;
conn.query(sql,function(err,data){
    if(err){
        console.log("出现错误")
        return ;
    }
    if(data.length<limitcount){
        console.log("没有数据可以加载了")
        console.log(data.length);
        console.log(data)
        return ;
    }
    console.log(data.length+"条数据")
    console.log(data)
})







conn.end((err)=>{
    if(err){
        console.log("链接关闭失败")
    }
    console.log("链接关闭成功")
})