const express = require('express');
const doctors = require('./controllers/doctor.controller');
const patients = require('./controllers/patient.controller');
const departments = require('./controllers/department.controller');
const assistants = require('./controllers/aassistant.controller');
const medicine = require('./controllers/medicines.controller');
require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/hospital', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));



const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.disable('x-powered-by');

app.use('/doctors', doctors);
app.use('/patients', patients);
app.use('/departments', departments);
app.use('/assistants', assistants);
app.use('/medicines', medicine);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => console.log('Listening on port 3000...'));

