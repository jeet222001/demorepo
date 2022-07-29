var net = require('net');
let clients =[]
var server = net.createServer(function (connection) {
    console.log('client connected');
    clients.push(connection)

    connection.on('end', function (client) {
        console.log('client disconnected');
    });

    connection.write('Hello World!\r\n');
    connection.pipe(connection);
});

server.listen(8080, function () {
    console.log('server is listening');
});

setTimeout(()=>{
    console.log(clients);
},5000)