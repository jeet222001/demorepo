const http = require('http');
var url = require('url')

http.createServer( (req, res)=>{
    var path = url.parse(req.url).pathname
    if(path=='/product'){
        let u = url.parse(req.url, true).query;
        var sum = +u.params1 + +u.params2;
        res.writeHead(200,{'content-type':'text/html'})
        res.end(`<h1 style="color:green">Sum Of the Query Passed is:- ${sum}</h1>`)
    }else{
        res.end(`<h1 style="color:red">404 Not Found</h1>
        <p>try Adding QueryParams to the URL such as:-(product?params1=10 && params2=20)</p>
        `)
    }

}).listen(3001,()=>{
    console.log('---->>>>>Server Started Running at http://localhost:3001<<<<<<----');
})

