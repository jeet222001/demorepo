const env = require('dotenv').config();
var fs = require('fs');
var express = require('express');
let helmet = require("helmet");

var ap = express()
ap.disable("x-powered-by");

ap.use(express.json())
ap.use(helmet.hidePoweredBy())

ap.get('/', (req, res) => {
    res.send('Hey this is Student API')
    res.end();
});
ap.get('/students', (req, res) => {
    fs.readFile('./student.json', 'utf-8', (err, data) => {
        if (err) throw err
        res.send(JSON.parse(data))

        res.end(() => console.log('GET method Called'))
    })
})
ap.get('/students/:id', (req, res) => {
    fs.readFile('./student.json', 'utf-8', (err, data) => {
        var obj = JSON.parse(data).find((val) => {
            return val.ID == parseInt(req.params.id)
        })
        res.send(obj)
        res.end(() => console.log('GET method Called'))
    })
})
ap.get('/students/:id/fees', (req, res) => {
    fs.readFile('./student.json', 'utf-8', (err, data) => {
        var obj = JSON.parse(data).find((val) => {
            return val.ID == parseInt(req.params.id)
        })
        res.send(obj.Fees)
        res.end(() => console.log('GET method Called'))
    })
})
ap.get('/students/:id/result', (req, res) => {
    fs.readFile('./student.json', 'utf-8', (err, data) => {
        var obj = JSON.parse(data).find((val) => {
            return val.ID == parseInt(req.params.id)
        })
        res.send(obj.Result)
        res.end(() => console.log('GET method Called'))
    })
})

ap.listen(process.env.port, () => {
    console.log('server listening on port ' + process.env.port);
})