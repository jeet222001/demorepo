const express = require('express');
const router = express.Router();
const joi = require('@hapi/joi');
const { Customer, validateCustomer} = require('../models/customer');


router.get('/', async (req, res) => {
    const customers = await Customer.find().sort('name');
    res.send(customers);
});

router.post('/', async (req, res) => {
    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const customer = new Customer({
        name: req.body.name,
        isGold: req.body.isGold,
        phone: req.body.phone,

    });
    const result = await customer.save();
    res.send(result);
});

router.put('/:id', async (req, res) => {
    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const customer = await Customer.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        isGold: req.body.isGold,
        phone: req.body.phone,
    }, { new: true });
    if (!customer) return res.status(404).send('The customer with the given ID was not found.');
    res.send(customer);
});

router.get('/:id', function (req, res) {
    Customer.findById(req.params.id, function (err, customer) {
        if (err) return res.status(500).send(err);
        if (!customer) return res.status(404).send('The customer with the given ID was not found.');
        res.send(customer);
    });
})
router.delete('/:id', async (req, res) => {
    const customer = await Customer.findByIdAndRemove(req.params.id);
    if (!customer) return res.status(404).send('The customer with the given ID was not found.');
    res.send(customer);
});

module.exports = router;