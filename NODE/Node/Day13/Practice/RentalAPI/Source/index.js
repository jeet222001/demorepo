const joi = require('joi');
joi.objectId = require('joi-objectid')(joi);
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const genres = require('./routes/genre');
const customers = require('./routes/customers');
const rentals = require('./routes/rentals');
const movies = require('./routes/movies');
const users = require('./routes/users');
const auth = require('./routes/auth');
const config = require('config');


if (!config.get('jwtPrivateKey')) {
    console.log('Fatal error: jwtPrivateKey is not defined.');
    process.exit(1);
}

mongoose
    .connect('mongodb://127.0.0.1:27017/Module13Practices', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDb...'))
    .catch((err) => console.error('Could not connect to MongoDB..'));



app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/rentals', rentals);
app.use('/api/movies', movies);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.disable('x-powered-by');
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

