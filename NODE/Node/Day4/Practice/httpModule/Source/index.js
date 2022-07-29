// var http = require('http');


// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('Hello World!');
//     res.end();
// }).listen(215,()=>{
//     console.log('---------Server Started Running----------');
// });


//server
var http = require('http');

var options = {
    host: 'tutorial.dev.radixweb.net',
    path: '/',
    method: 'GET'
};

// Making a get request to 
// 'www.geeksforgeeks.org'
http.request(options, (response) => {

    // Printing the statusCode
    console.log(response.statusCode);
}).end();
