const path = require('path');
const url = require('url');
// base = path.basename('./html/a/index.html');
// dir = path.dirname("./html/a/");
// ex = path.extname('./html/a/index.html');
// par = path.parse('./html/a/index.html?name="Jack');
// // console.log(base,
// //     dir,
// //     ex,
// //     par)
// urlparse = url.parse('./html/a/index.html?name=Jack&age=15');
// // console.log(urlparse);

// newpath = path.format({
//     root: "/root",
//     dir: "/html/user/dir",
//     base: "file.html"
// })

// console.log(newpath)




const fs = require('fs');
data = fs.readFileSync('./test.txt','utf-8');//同步加载
console.log(data)