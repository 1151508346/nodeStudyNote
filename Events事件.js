const EventEmitter = require('events');

// class myEvent extends EventEmitter{}
const e = new EventEmitter()

e.on('aaa',function(a,b){
    console.log('事件触发')
    console.log(a,b,this)
})
e.emit('aaa',1,2);
// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('触发事件');
// });
// myEmitter.emit('event');


// e.once("newListener",function(event,listener){
//     if(event == "event"){
//         e.on("event",function(){
//             console.log('B');
//         })
//     }
// })
// e.on('event', () => {
//   console.log('A');
// });
// e.emit('event');
// 打印:
//   B
//   A