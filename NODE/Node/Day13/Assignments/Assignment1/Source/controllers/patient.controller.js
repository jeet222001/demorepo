var express = require('express');
var router = express.Router();
var PatientDomain = require('../domain/patient.domain');

class PatientController{
    static async getAllPatient(req, res){
        const patient = new PatientDomain();
        patient.getAllPatient(req, res);
    }
    static async getPatientById(req, res){
        const patient = new PatientDomain();
        patient.getPatientById(req, res);
    }
    static async insertPatient(req, res){
        const patient = new PatientDomain();
        patient.insertPatient(req, res);
    }
    static async deletePatient(req, res){
        const patient = new PatientDomain();
        patient.deletePatient(req, res);
    }
    static async updatePatient(req, res){
        const patient = new PatientDomain();
        patient.updatePatient(req, res);
    }
    static async getPatientMedicine(req, res){
        const patient = new PatientDomain();
        patient.getPatientMedicine(req, res);
    }
}

router.get('/', PatientController.getAllPatient);
router.get('/:PatId', PatientController.getPatientById);
router.post('/', PatientController.insertPatient);
router.delete('/:PatId', PatientController.deletePatient);
router.put('/:PatId', PatientController.updatePatient);
router.get('/:PatId/medicine', PatientController.getPatientMedicine);

module.exports = router;