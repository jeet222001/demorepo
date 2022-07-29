const mongoose = require('mongoose')
const express = require('express');
const router = express.Router()

const Genre = mongoose.model('Genre', new mongoose.Schema({
    name: {
        type: String,
    }
}));

router.get('/', async (req, res) => {
    const genres = await Genre.find().sort('name');
    res.send(genres)
})

router.post('/', async (req, res) => {
    let genre = new Genre({ name: req.body.name })
    genre = await genre.save()
    res.send(genre);
})

router.put('/:id', async (req, res) => {
    const genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true })

    if (!genre) return res.status(400).send('Not Found')
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

module.exports = router