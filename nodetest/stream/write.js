/***
 * 写入文件先写入缓存区，满了之后才会写入文件里
 *
 * 缓存区的大小
 *  highWaterMark
 * 
 * 
 */
const fs= require('fs');
fs.createWriteStream({
    flags:"w",
    mode:0o666,
    highWaterMark:3
    
})