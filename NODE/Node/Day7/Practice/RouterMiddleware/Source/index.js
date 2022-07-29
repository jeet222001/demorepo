const express = require('express');
const app = express();
const router = express.Router();
const env = require('dotenv').config();
var fs = require('fs');
app.disable('x-powered-by');

router.use((req, res, next) => {
    console.log('Time', new Date());
    next();
})

console.log('------------------');
router.get('/users', (req, res, next) => {
    console.log('Request URL' + req.originalUrl)
    next();
}, (req, res, next) => {
    fs.readFile('./employee.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.send(data)
        }
    })
    console.log('Request Type' + req.method)
}, (req, res, next) => {
    res.json({
        status: true,
        id: req.params.id
    })
})
app.use('/', router)

app.listen(process.env.port, () => {
    console.log(`server is running on port ${process.env.port}`)
})