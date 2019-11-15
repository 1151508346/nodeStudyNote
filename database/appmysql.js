var mysql = require("mysql");

const con = mysql.createConnection({
    host     : 'localhost',       
    user     : 'root',              
    password : '12345678',       
    port: '3306',                   
    database: 'zank' 
});
con.connect();

module.exports = con;