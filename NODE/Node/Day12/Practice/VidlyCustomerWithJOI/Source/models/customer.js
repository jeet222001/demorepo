const mongoose = require('mongoose');
const joi = require('@hapi/joi')
const {Schema} = mongoose

const customerSchema = new Schema({
    name: {
        type: String,
    },
    isGold: {
        type: Boolean,
        default: false,
    },
    phone: {
        type: String,
        required: true,
    },
})

const Customer = mongoose.model('Customer', customerSchema);

function validateCustomer(customer) {
    const schema = {
        name: joi.string().min(3).max(50).required(),
        isGold: joi.boolean(),
        phone: joi.string().min(5).max(10).required(),
    }
    return joi.validate(customer, schema)
}


module.exports = { Customer, validateCustomer}