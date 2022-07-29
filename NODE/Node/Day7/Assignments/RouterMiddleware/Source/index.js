const express = require('express');
const serverDebugging = require('debug')('app:server');

const app = express();
require('dotenv').config();
app.disable('x-powered-by');

const employee = require('./router/Employee');
const index = require('./router/index');


app.set('view engine', 'jade');
//Routers....
app.use('/', index);
app.use('/emps', employee);



app.listen(process.env.port, () => {
    console.log(`server is running on port ${process.env.port}`)
})

