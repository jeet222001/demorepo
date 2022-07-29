require('dotenv').config();
const express = require('express');
var createError = require("http-errors");
const employees = require('./controller/Employee/employee.controller');
var students = require('./controller/Student/student.controller');
var login = require('./controller/Login/login');
const verifytoken = require('./authentication/verifytoken');
const logger = require('./middleware/logger');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(logger);
const mongoose = require('mongoose');
app.disable('x-powered-by');

mongoose.connect('mongodb://127.0.0.1:27017/Module10AssignmentDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Could not connect to MongoDB...'));


app.use("/login", login);
app.use(verifytoken);
app.use("/emps", employees);
app.use("/students", students);


app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // seding error message
    res.status(err.status || 500).send("Smething is broke!!");
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});