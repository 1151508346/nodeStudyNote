const fs = require("fs");
const readStream = fs.createReadStream("file.txt");
const writeStream = fs.createWriteStream("pipeWrite.txt");

//返回一个写入流的对象
const result = readStream.pipe(writeStream);

result.on("finish",function(){
    console.log("pipe write finish")
})