const fs = require("fs");
const writeStream = fs.createWriteStream("write.txt");

const result = writeStream.write("这是我要写入的数据2","utf-8")
const result2 = writeStream.write("这是我要写入的数据2","utf-8")
writeStream.end()

writeStream.on("finish",function(){
    console.log("write finish")
})

writeStream.on("error",function(err){
    console.log(err)
})

