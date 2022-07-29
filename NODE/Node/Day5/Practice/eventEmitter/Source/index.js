const EventEmitter = require('events');

//practice1
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log('started');
});

eventEmitter.emit('start');


//Practice 2
eventEmitter.on('start', number => {
    console.log(`started ${number}`);
});

eventEmitter.emit('start', 23);


//practice 3
eventEmitter.on('start', (start, end) => {
    console.log(`started from ${start} to ${end}`);
});

eventEmitter.emit('start', 1, 100);
