var mysql = require('mysql');
console.log(mysql);
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'stu'
});
con.connect();
con.query('select * from student', function (error, results, fields) {
    if (error) {
        console.log(error);
        throw error;
    };
    // console.log('The solution is: ', results);
    // console.log(fields);
});

