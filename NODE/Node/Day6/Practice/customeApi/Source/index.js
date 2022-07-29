require('dotenv').config();
var fs = require('fs');
var express = require('express');
let helmet = require("helmet");

var ap = express()
ap.disable("x-powered-by");
ap.use(helmet.hidePoweredBy())

ap.use(express.json())



ap.get('/', (req, res) => {
    res.send('Hey There I am Learning Express')
    res.end();
});
ap.get('/customers', (req, res) => {
    fs.readFile('./customer.json', 'utf-8', (err, data) => {
        if (err) throw err
        res.send(JSON.parse(data))

        res.end(() => console.log('GET method Called'))
    })
})
ap.get('/customers/:id', (req, res) => {
    fs.readFile('./customer.json', 'utf-8', (err, data) => {
        var obj = JSON.parse(data).find((val) => {
            return val.id == parseInt(req.params.id)
        })
        res.send(obj)
        res.end(() => console.log('GET method Called'))
    })
})

ap.post('/customers', (req, res) => {
    var List = []
    fs.readFile('./customer.json', 'utf-8', (err, data) => {
        if (err) throw err
        List = JSON.parse(data)
        List.push(req.body)
        fs.writeFile('./customer.json', JSON.stringify(List), (err) => {
            if (err) throw err
            console.log('Data Added successfully');
            res.send(List);
            res.end(() => console.log('POST method Called'))
        })

    })
})
ap.put('/customers/:id', (req, res) => {
    var List =[]
    fs.readFile('./customer.json', 'utf-8', (err, data) => {
        if (err) throw err
        List = JSON.parse(data)
        var obj = List.find((val) => {
            return val.id == parseInt(req.params.id)
        })

        obj.name = req.body.name
        obj.Age = req.body.Age
        obj.City = req.body.City

        fs.writeFile('./customer.json', JSON.stringify(List), (err) => {
            if (err) throw err
            console.log('Data Updated successfully');
            
        })
        res.send(List);
        res.end(() => console.log('PUT method Called'))
    })
})
ap.delete('/customers/:id',(req, res) => {
     List =[]
    fs.readFile('./customer.json', 'utf-8', (err, data)=>{
        if(err) throw err
        List = JSON.parse(data)
        var result = List.find((val) => {
            return val.id==parseInt(req.params.id)
        })
        var index = List.indexOf(result)
        List.splice(index, 1)

        fs.writeFile('./customer.json', JSON.stringify(List), (err) => {
            if (err) throw err
            console.log('Data Deleted successfully');

        })
        res.send(List);
        res.end(() => console.log('DELETE method Called'))
    })
})
ap.listen(process.env.port, () => {
    console.log('server listening on port ' + process.env.port);
})