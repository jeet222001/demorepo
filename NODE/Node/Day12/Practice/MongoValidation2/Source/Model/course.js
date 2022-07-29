const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network'],
        lowercase: true,
        // uppercase: true
        trim: true,
    },
    author: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    tags: {
        type: Array,
        validate: {
            isAsync: true,
            validator: function (v) {
                return v && v.length > 0;
            },
            message: 'A course should have at least one tag.'
        }
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
        required: function () { return this.isPublished; },
        min: 10,
        max: 200,
        get: v => Math.round(v),
        set: v => Math.round(v)
    }
})
module.exports = courseSchema