const util = require("util");

var events = require("events");
/**
 * 1.格式化字符串
 */

//  const formatstr = util.format('%s=%j',"obj",{name:"Jack"})

/**
 * 检查对象
 */

//console.log([1,2,3] instanceof Array);
//console.log(util.isArray([1,2,3]));

/**
 * 
 */

// var obj = {age:20};
// console.log(typeof util.inspect(obj))


// function Write(){
   
//     events.EventEmitter.call(this);
// }

// util.inherits(Write,events.EventEmitter);

// Write.prototype.write = function(){
//     this.emit("abc","参数")
// }

// const w = new Write()

// w.on("abc",function(data){
//     console.log(data)
// })
// w.write();





function Write(){
    events.EventEmitter.call(this);
}
util.inherits(Write,events.EventEmitter);
const w = new Write()
w.addListener("我来了",function(arg1,arg2){
    console.log("事件触发，调用此回调函数",arg1,arg2,1);
});
elem.emit("我来了",'one','two');





