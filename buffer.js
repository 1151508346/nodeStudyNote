
let buf = Buffer.alloc(10);
buf[0] = 88;
buf[1] = 00;
buf[2] = 0xaa;
console.log(buf);
console.log(buf[0].toString(16))

// 可能含有敏感数据
let buf1 = Buffer.allocUnsafe(10);
for (var i = 0; i < buf.length; i++) {
    console.log(buf1[i].toString());
}





