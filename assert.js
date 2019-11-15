// var assert = require('assert');

// const obj1 = {
//   a: {
//     b: 1
//   }
// };
// const obj2 = {
//   a: {
//     b: 2
//   }
// };
// const obj3 = {
//   a: {
//     b: 1
//   }
// };
// const obj4 = Object.create(obj1);

//     const result = assert.deepEqual(obj1, obj1);

//     console.log(result)


// var newObj = Object.setPrototypeOf({},Date.prototype)
// console.log(newObj)

// const buf1 = Buffer.alloc(10);
// console.log(buf1);

// const buf2 = Buffer.alloc(10, 1);
// console.log(buf2);

// const buf3 = Buffer.allocUnsafe(10);
// console.log(buf3);

// const buf4 = Buffer.from([1, 2, 3]);

// console.log(buf4);
// // 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
// const buf5 = Buffer.from('tést');

// console.log(buf5);


// const buf1 = Buffer.from('a1231313dsfsd',"ascii");
// console.log(buf1)
// console.log(buf1.toString())
// console.log(buf1.toString("hex"))
// console.log(buf1.toString("base64"));

// const arr = new Uint16Array(20);
// const buf = Buffer.from(arr.buffer, 0, 16);

// console.log(arr,buf);
// // 打印: 16
 
// var v2 = new Uint8Array(5);
// console.log(v2);
    

// const arr = new ArrayBuffer(10);
// console.log(arr,arr.byteLength);

// const str = 'http://nodejs.cn/';
// const buf = Buffer.allocUnsafe(str.length);

// for (let i = 0; i < str.length; i++) {
//   buf[i] = str.charCodeAt(i);
// }

// console.log(buf.toString());
// const numCPUs = require('os').cpus().length;
// console.log(numCPUs)

