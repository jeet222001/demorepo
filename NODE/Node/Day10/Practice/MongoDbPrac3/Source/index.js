require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const employeeRouter = require('./Controllers/Employee/employee.controller');

mongoose
    .connect('mongodb://127.0.0.1:27017/employeeDB', { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const app = express();
app.use(express.json());
app.use('/emps', employeeRouter);
app.disable('x-powered-by');
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));