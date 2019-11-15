var fs = require('fs');
//同步读取文件
//  var txt = fs.readFileSync('./1.txt')
// // 同步读取文件
// var res = fs.writeFileSync('./write.txt', txt , 'utf8');
// console.log(res);
// 异步写入文件
// fs.writeFile('./write1.txt', 'aaaaaaaa', 'utf8', function (err) {
//     // 该回调执行机制是写入文件写完之后（异步I/O）
//     if (err) {
//         console.log('失败鸟');
//         throw err;
//     }
//     console.log('成功');
// })
// fs.readFile('./write2.txt', 'utf8', function (err, data) {
//     if (err) {
//         console.log('失败鸟');
//         throw err;
//     }
//     console.log('成功')
//     console.log(data.toString());
// });

//判断文件是否存在
// 同步

// var res = fs.existsSync('./1.txt');
// console.log(res);//文件存在返回true，不存在返回false

// // 异步
// var resdefer = fs.exist('./1.txt');
// console.log(resdefer);

// 追加文件
// var res = fs.appendFileSync('./log.txt', '这是日志文件' + new Date().toLocaleString() + "\n\r", 'utf8');
// console.log(res == undefined);
// 异步追加数据
// fs.appendFile('./log.txt', '这是异步的数据'+new Date().toLocaleString()+"\n\r", function (err) {
//     if (err) {
//         console.log('添加失败');
//         throw err;
//     }
//     console.log("成功了");

// })

// 监听文件
fs.watchFile('./1.txt', function (a, b) {
    console.log("a" + a);

    console.log("b:" + b);
});















