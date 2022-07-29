// Example 2->Adapted and thanks to Sameer Buna
const EventEmitter = require('events')
const fetch = require('node-fetch')

const w = new EventEmitter();


async function Data(){
    await fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()).then(data => console.log(data));

}

w.on('read',Data)

w.emit('read');