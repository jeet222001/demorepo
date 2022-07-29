const express = require('express');
const app = express();
const mongoose = require('mongoose');
const genres = require('./routes/genre');


mongoose
    .connect('mongodb://127.0.0.1:27017/vidly', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDb...'))
    .catch((err) => console.error('Could not connect to MongoDB..'));

app.use(express.json());
app.use('/api/genres', genres);
app.disable('x-powered-by');
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
