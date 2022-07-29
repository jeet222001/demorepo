const joi = require('@hapi/joi')
const mongoose = require('mongoose')

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
});
const Genre = mongoose.model('Genre', genreSchema);

function validateGenre(genre) {
    const schema = {
        name: joi.string().min(3).required()
    }
    return joi.validate(genre, schema)
}

module.exports = { Genre, validateGenre }