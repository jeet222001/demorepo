const mongoose = require('mongoose');
const meicineSchema = new mongoose.Schema({
    _id: Number,
    name: { type: 'string', required: true },
});
const Meicine = mongoose.model('Meicine', meicineSchema);
module.exports = Meicine;