
const fs = require('fs');

const readStr = fs.createReadStream('../test.txt',{
    flags:"r",
    // start
    // end
    encoding:"utf-8",
    highWaterMark:3,
})
// readStr.setEncoding('utf-8')
readStr.on('data',function(data){
    console.log(data);
})