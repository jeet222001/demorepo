var express = require('express');
var router = express.Router();
const DoctorDomain = require('../domain/doctor.domain');

class DoctorController {
    static async getAllDoctor(req, res) {
        const doctor = new DoctorDomain();
        doctor.getAllDoctor(req, res);
    }
    static async getDoctorById(req, res) {
        const doctor = new DoctorDomain();
        doctor.getDoctorById(req, res);
    }
    static async insertDoctor(req, res) {
        const doctor = new DoctorDomain();
        doctor.insertDoctor(req, res);
    }
    static async deleteDoctor(req, res) {
        const doctor = new DoctorDomain();
        doctor.deleteDoctor(req, res);
    }
    static async updateDoctor(req, res) {
        const doctor = new DoctorDomain();
        doctor.updateDoctor(req, res);
    }
    static async getPatients(req, res) {
        const doctor = new DoctorDomain();
        doctor.getPatients(req, res);
    }
    static async getPatientById(req, res) {
        const doctor = new DoctorDomain();
        doctor.getPatientById(req, res);
    }
    static async getSummary(req, res) {
        const doctor = new DoctorDomain();
        doctor.getSummary(req, res);
    }
}

router.get('/', DoctorController.getAllDoctor);
router.get('/:DoctId', DoctorController.getDoctorById);
router.post('/', DoctorController.insertDoctor);
router.delete('/:DoctId', DoctorController.deleteDoctor);
router.put('/:DoctId', DoctorController.updateDoctor);
router.get('/:DoctId/patients', DoctorController.getPatients);
router.get('/:DoctId/patients/:PatId', DoctorController.getPatientById);
router.get('/:DoctId/summary', DoctorController.getSummary);

module.exports = router;