const mongoose = require('mongoose');

const assistantSchema = new mongoose.Schema({
    _id: Number,
    name: { type: 'string', required: true },
    patients: [
        {
            type: Number,
            required: true,
            ref: 'Patient'
        }
    ],
});

const Assistant = mongoose.model('Assistant', assistantSchema);
module.exports = Assistant;