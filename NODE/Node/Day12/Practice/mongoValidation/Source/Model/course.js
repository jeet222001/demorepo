const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    author: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255

    },
    tags: {
        type: Array,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    isPublished: {
        type: Boolean,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 10,
        max: 200
    }
})
module.exports =courseSchema