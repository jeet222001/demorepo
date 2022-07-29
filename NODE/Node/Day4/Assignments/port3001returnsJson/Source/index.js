const http = require('http');
var fs = require('fs');

http.createServer( (req, res)=>{
    res.write('Hello World\n')
    fs.readFile('./person.json',(err, data)=>{
        if(err) throw err;
        res.end(data);
    })
}).listen(3001,()=>{
    console.log('---->>>>>Server Started Running at http://localhost:3001<<<<<<----');
})