const fs = require("fs");
const ReadStream = fs.createReadStream("file.txt")

ReadStream.on("data",function(result){
    console.log(result.toString())
})
ReadStream.on("end",function(){
    console.log("end.....")
});
ReadStream.on("error",function(err){
    console.log(err);
})