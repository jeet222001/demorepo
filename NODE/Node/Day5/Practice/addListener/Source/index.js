const EventEmitter = require('events')

const myEmitter = new EventEmitter();

function c1() {
    console.log('an event occurred!');
}

function c2() {
    console.log('yet another event occurred!');
}

myEmitter.on('eventOne', c1);
myEmitter.on('eventOne', ()=>{
    console.log('Count 2');
});

 // Register for eventOne
myEmitter.on('eventtwo', c2); // Register for eventOne

myEmitter.emit('eventOne');
myEmitter.emit('eventOne');
myEmitter.emit('eventOne');
myEmitter.emit('eventOne');
myEmitter.emit('eventtwo');
myEmitter.emit('eventtwo');
myEmitter.emit('eventtwo');
console.log('-----------------------------------');

myEmitter.once('eventOnce', () => console.log('eventOnce once fired'));
myEmitter.emit('eventOnce');
myEmitter.emit('eventOnce');
console.log('------------------------------------');

myEmitter.on('status', (code, msg) => console.log(`Got ${code} and ${msg}`));
myEmitter.emit('status',404,'Not Found');
console.log('------------------------------------');

function c3() { console.log('eve fired') }
myEmitter.once('eve',c3);
myEmitter.emit('eve');  // noop
myEmitter.off('eve',c3);//off event
myEmitter.emit('eve');  // noop

console.log('------------------------------------');

console.log(myEmitter.listenerCount('eventOne'));
console.log('------------------------------------');


console.log(myEmitter.rawListeners('eventtwo'));
console.log('------------------------------------');
