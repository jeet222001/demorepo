const mongoose = require('mongoose')

const departmentSchema = new mongoose.Schema({
    _id: Number,
    name: { type: 'string', required: true },

});

const Department = mongoose.model('Department', departmentSchema);
module.exports = Department;