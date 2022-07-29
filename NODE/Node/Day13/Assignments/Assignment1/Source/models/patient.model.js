const mongoose = require('mongoose');
const patientSchema = new mongoose.Schema({
    _id: Number,
    name: { type: String, required: true },
    age: { type: Number, required: true },
    admittedDate: { type: Date, default: Date.now, required: true },
    bloodGroup: { type: String, required: true },
    Gender: { type: String, required: true },
    meicines: [{
        medicine: {
            type: Number,
            required: true,
            ref: 'Meicine'
        },
        doses: [{ type: String, required: true, enum: ['morning', 'afternoon', 'night'] }],

    }
    ],
    department: {
        type: Number,
        required: true,
        ref: 'Department'
    },
}
    , { timestamps: true });
const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
