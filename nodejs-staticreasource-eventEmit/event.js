const events = require("events")
// const e = new events.EventEmitter();
// e.on("getdata",function(options){
//     console.log(options)
// })
// e.emit("getdata",{name:"aaa"})

var util = require("util");
function Stream(){
    events.EventEmitter.call(this);
}
util.inherits(Stream, events.EventEmitter);

var elem = new Stream();
elem.addListener("我来了",function(arg1,arg2){
    console.log("事件触发，调用此回调函数",arg1,arg2,1);
});

// elem.emit("我来了",'one','two');






