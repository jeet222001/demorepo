const Patient = require('../models/patient.model');

class PatientDomain{
    async getAllPatient(req, res){
        try{
            const patients = await Patient.find();
            if(!patients){
                return res.status(404).send({
                    message: 'No patients found'
                });
            }
            res.send(patients);
        }catch(err){ res.send(err)}
    }
    async getPatientById(req, res){
        try{
            let id = req.params.PatId;
            const patient = await Patient.findById(id);
            if(!patient){
                res.status(404).send('Patient not found');
            }
            res.send(patient);
        }catch(err){ res.send(err)}
    }
    async insertPatient(req, res){
        try{
            let data = req.body
            const patient = new Patient(data);
           const result = await patient.save();
            res.send(result);
        }catch(err){ res.send(err)}
    }
    async updatePatient(req, res) {
        //getting user input
        let data = req.body;

        let id = req.body._id;
        const patients = await Patient.find();
        let isAvail = patients.find((e) => e.id == id);

        if (isAvail) {
            try {
                const result = await Patient.findByIdAndUpdate(
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
            res.status(404).send("Patient Not Foud");
        }
    }
    async deletePatient(req, res){
        try{
            let id = req.params.PatId;
            const patient = await Patient.findByIdAndRemove(id);
            if(!patient){
                res.status(404).send('Patient not found');
            }
            res.send({message: 'Patient deleted'});
        }catch(err){ res.send(err)}
    }

    async getPatientMedicine(req, res) {
        try {
            let id = req.params.PatId;
            const patient = await Patient.findById(id)
            .populate('meicines.medicine',"name")
            if (!patient) {
                res.status(404).send('Patient not found');
            }
            res.send(patient.meicines);
        } catch (err) { res.send(err)}
    }
}
module.exports =PatientDomain