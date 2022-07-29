const { Rental, validate } = require('../models/rental');
const { Movie } = require('../models/movie');
const { Customer } = require('../models/customer');
const mongoose = require('mongoose');
const fawn = require('fawn');
const express = require('express');
const router = express.Router();


fawn.init("mongodb://127.0.0.1:27017/Module13Practices");

router.get('/', async (req, res) => {
    const rentals = await Rental.find().sort('-dateOut');
    res.send(rentals);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const customer = await Customer.findById(req.body.customerId);
    if (!customer) return res.status(400).send('Invalid customer.');

    const movie = await Movie.findById(req.body.movieId);
    if (!movie) return res.status(400).send('Invalid movie.');

    if (movie.numberInStock === 0) return res.status(400).send('Movie not in stock.');

    let rental = new Rental({
        customer: {
            _id: customer._id,
            name: customer.name,
            phone: customer.phone
        },  
        movie: {
            _id: movie._id,
            title: movie.title,
            dailyRentalRate: movie.dailyRentalRate
        },
    });
    const session = await mongoose.startSession();
    try {
        session.startTransaction();
        await rental.save();
        movie.numberInStock--;
        await movie.save();
        await session.commitTransaction();
   } catch (e) {    
        await session.abortTransaction();
        throw e;
    }
    res.send(rental);
    session.endSession();
});

router.get("/:id", async (req, res) => {
    const rental = await Rental.findById(req.params.id).select("-__v");

    if (!rental)
        return res.status(404).send("The rental with the given ID was not found.");

    res.send(rental);
});

module.exports = router