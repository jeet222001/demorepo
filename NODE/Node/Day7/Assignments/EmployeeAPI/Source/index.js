const env = require('dotenv').config();
var fs = require('fs');
var express = require('express');
let helmet = require("helmet");

function logTime(req, res, next) {
    var date = new Date();
    console.log(date,req.method,req.url,);
    next();
}

var app = express()
app.use((err, req, res, next) => {
    res.status(500).send('This is an error');
    next();
})

app.disable("x-powered-by");
app.use(helmet.hidePoweredBy())
app.use(express.json())
app.use(logTime)

app.get('/', (req, res) => {
    res.send('Module 7 Practice Middleware')
    res.end();
});
app.get('/employees', (req, res) => {
    fs.readFile('./employee.json', 'utf-8', (err, data) => {
        if (err) throw err
        res.send(JSON.parse(data))
        res.end()
    })
})
app.get('/employees/:id', (req, res) => {
    fs.readFile('./employee.json', 'utf-8', (err, data) => {
        var obj = JSON.parse(data).find((val) => {
            return val.id == parseInt(req.params.id)
        })
        res.send(obj)
        res.end()
    })
})

app.get('/employees/:id/child/assignments', (req, res) => {
    fs.readFile('./employee.json', 'utf-8', (err, data) => {
        var obj = JSON.parse(data).find((val) => {
            return val.id == parseInt(req.params.id)
        })
        res.send(obj.assignments)
        res.end()
    })
})
app.get('/employees/:id/child/assignments/:AssignmentId', (req, res) => {
    fs.readFile('./employee.json', 'utf-8', (err, data) => {
        var obj = JSON.parse(data).find((val) => {
            return val.id == parseInt(req.params.id)
        })

        var assignment = obj.assignments.find((val) => {
            return val.AssignmentId == parseInt(req.params.AssignmentId)
        })
        res.send(assignment)
        res.end()
    })
})
app.put('/employees/:id/child/assignments/:AssignmentId', (req, res) => {
    var List = []
    fs.readFile('./employee.json', 'utf-8', (err, data) => {
        if (err) throw err
        List = JSON.parse(data)
        var obj = List.find((val) => {
            return val.id == parseInt(req.params.id)
        })

        var assignment = obj.assignments.find((val) => {
            return val.AssignmentId == parseInt(req.params.AssignmentId)
        })
        
        assignment.ActionCategory = req.body.ActionCategory
        assignment.AssingmentName = req.body.AssingmentName
        assignment.AssingmentNumber = req.body.AssingmentNumber
        fs.writeFile('./employee.json', JSON.stringify(List), (err) => {
            if (err) throw err
            console.log('Data Updated successfully');

        })
        res.send(List);
        res.end(() => console.log('PUT method Called'))
    })
})
app.post('/employees', (req, res) => {
    var List = []
    fs.readFile('./employee.json', 'utf-8', (err, data) => {
        if (err) throw err
        List = JSON.parse(data)
        List.push(req.body)
        fs.writeFile('./employee.json', JSON.stringify(List), (err) => {
            if (err) throw err
            console.log('Data Added successfully');
            res.send(List);
            res.end()
        })

    })
})
app.listen(process.env.port, () => {
    console.log('server listening on port ' + process.env.port);
})