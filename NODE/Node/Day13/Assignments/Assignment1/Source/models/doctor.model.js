const mongoose = require('mongoose');
const doctorSchema = new mongoose.Schema({
    _id: Number,
    name: { type: 'string', required: true },
    department: { type: Number, required: true, ref: 'Department' },
    patients: [
        {
            type:Number,
            ref: 'Patient'
        }
    ],
}
    , { timestamps: true });
const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;