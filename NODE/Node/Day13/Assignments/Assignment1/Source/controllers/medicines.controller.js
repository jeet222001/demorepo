var express = require('express');
var router = express.Router();
const MedicineDomain = require('../domain/medicines.domain');

class MedicineController{
    static async getAllMedicines(req, res){
        const medicine = new MedicineDomain();
        medicine.getAllMedicine(req, res);
    }
    static async getMedicineById(req, res){
        const medicine = new MedicineDomain();
        medicine.getMedicineById(req, res);
    }
    static async insertMedicine(req, res){
        const medicine = new MedicineDomain();
        medicine.insertMedicine(req, res);
    }
    static async deleteMedicine(req, res){
        const medicine = new MedicineDomain();
        medicine.deleteMedicine(req, res);
    }
}

router.get('/', MedicineController.getAllMedicines);
router.get('/:MedId', MedicineController.getMedicineById);
router.post('/', MedicineController.insertMedicine);
router.delete('/:MedId', MedicineController.deleteMedicine);

module.exports = router;