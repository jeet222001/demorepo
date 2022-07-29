const Doctor = require('../models/doctor.model');

class DoctorDomain {
    async getAllDoctor(req, res) {
        try {
            const doctors = await Doctor.find();
            if (!doctors) {
                return res.status(404).json({
                    message: 'No doctors found'
                });
            }
            res.json(doctors);
        } catch (err) { res.send(err) }
    }
    async getDoctorById(req, res) {
        try {
            let id = req.params.DoctId;
            const doctor = await Doctor.findById(id);
            if (!doctor) {
                res.status(404).send('Doctor not found');
            }
            res.json(doctor);
        } catch (err) { res.send(err) }
    }
    async getPatients(req, res) {
        try {
            let id = req.params.DoctId
            const doctor = await Doctor.findById(id)
                .populate('patients');
            if (doctor) {
                res.json(doctor.patients);
            }
            res.status(404).send('No Records Found');
        } catch (err) { res.send(err) }
    }
    async getPatientById(req, res) {
        try {
            let id = req.params.DoctId;
            let pId = parseInt(req.params.PatId);

            const doctor = await Doctor.findById(id)
            .populate('patients')
            if (!doctor) {
                res.status(404).send('Doctor not found');
            }
            const patient = doctor.patients.find(p => p._id === pId);
            res.send(patient);
        } catch (err) { res.send(err) }
    }

    async insertDoctor(req, res) {
        try {
            let data = req.body;
            const doctor = new Doctor(data);
            const result = await doctor.save();
            res.json(result);
        } catch (err) { res.send(err) }
    }
    async updateDoctor(req, res) {
        //getting user input
        let data = req.body;

        let id = req.body._id;
        const doctors = await Doctor.find();
        let isAvail = doctors.find((e) => e.id == id);

        if (isAvail) {
            try {
                const result = await Doctor.findByIdAndUpdate(
                    id,
                    {
                        $set: data,
                    },
                    { new: true }
                );
                res.send(result);
            } catch (e) {
                res.send(e.message);
            }
        } else {
            res.status(404).send("Doctor Not Found");
        }
    }
    async deleteDoctor(req, res) {
        try {
            let id = req.params.DoctId
            const doctor = await Doctor.findByIdAndRemove(id);
            if (!doctor) {
                res.status(404).send('Doctor not found');
            }
            res.json({ message: 'Doctor deleted' });
        } catch (err) { res.send(err) }
    }

    async getSummary(req, res) {
        try {
            let id = req.params.DoctId
            const doctor = await Doctor.findById(id)
            .populate('department')
            .populate({
                path: 'patients',
                populate: {
                    path:'meicines.medicine'
                },
                select:'-department -createdAt -updatedAt -__v'
            })
            .select("-_id -__v -name -createdAt -updatedAt");
            if (!doctor) {
                res.status(404).send('Doctor not found');
            }
            res.send(doctor)
        } catch (err) { res.send(err) }
    }
}

module.exports = DoctorDomain;