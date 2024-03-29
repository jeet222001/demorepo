const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();
const joi = require('@hapi/joi')

const genreSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
})

const Genre = mongoose.model('Genre', genreSchema);

router.get('/', async (req, res) => {
    const genres = await Genre.find().sort('name');
    res.send(genres)
})

router.post('/', async (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let genre = new Genre({ name: req.body.name })
    genre = await genre.save()
    res.send(genre);
})

router.put('/:id', async (req, res) => {
    const genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true })
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    if (!genre) return res.status(400).send('Genre Not Found')
    res.send(genre)
})

router.delete('/:id', async (req, res) => {
    const genre = await Genre.findByIdAndRemove(req.params.id)
    if (!genre) return res.status(400).send('Not Found')
    res.send(genre)
})

router.get('/:id', async (req, res) => {
    const genre = await Genre.findById(req.params.id)
    if (!genre) return res.status(400).send('Not Found')
    res.send(genre)
})

 function validateGenre(genre) {
    const schema = {
        name: joi.string().min(3).required()
    }
    return joi.validate(genre, schema)
}

module.exports = router