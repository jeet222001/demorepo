const express = require('express');
const app = express();
app.disable("x-powered-by");


const LogMiddleware = (req,res,next)=>{
    console.log(`Data Logged ${req.url} ${req.method} :--> ${new Date()}`)
    next();
}

//Application Level Middleware
app.use(LogMiddleware);

app.get('/users',(req, res)=>{
    res.json({
        'message':'Logged in Middleware',
        'status':true
    })
})

app.post('/save',(req, res)=>{
    res.json({
        'message':'POST Method',
        'status':true
    })
})
app.listen(3000,(req, res)=>{
    console.log('\n-->>>server listening on port 3000<<<<---');
})