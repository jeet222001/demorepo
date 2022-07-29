const joi = require('@hapi/joi');
const mongoose = require('mongoose');

const { genreSchema } = require('./genre');

const Movie = mongoose.model('Movies', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 255
    },
    genre: {
        type: genreSchema,
        required: true
    },
    numberInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    }
}));

function ValidateMovies(movie) {
    const schema = {
        title: joi.string().min(3).max(50).required(),
        genreId: joi.objectId().required(),
        numberInStock: joi.number().min(0).required(),
        dailyRentalRate: joi.number().min(0).required()
    }
    return joi.validate(movie, schema)
}

module.exports = { Movie, validate: ValidateMovies };