/*events 模块来处理异步
Node.js 是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高。
Node.js 的每一个 API 都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发。
Node.js 有多个内置的事件，通过引入events 模块，并通过实例化 EventEmitter 类来绑定和监听事件*/

//const EventEmitter = require('events');
const events = require('events');
//console.log(events);

const eventEmitter = new events.EventEmitter();

//广播和监听广播也叫发布订阅模式
//监听parent的广播,注意事件名称必须一致 'from_parent'
eventEmitter.on('from_parent', ()=> {
    console.log('i received the news that from parent...');
});

//触发事件
setTimeout(()=> {
    console.log('start emitting events...');
    eventEmitter.emit('from_parent', 'data from parent...');
},1000);