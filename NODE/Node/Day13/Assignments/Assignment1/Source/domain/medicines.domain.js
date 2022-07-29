const Medicine = require('../models/meicines.model');

class MedicineDomain {
    async getAllMedicine(req, res) {
        try {
            const medicines = await Medicine.find();
            if (!medicines) {
                return res.status(404).json({
                    message: 'No medicines found'
                });
            }
            res.json(medicines);
        } catch (err) { res.send(err) }
    }
    async getMedicineById(req, res) {
        try {
            let id = req.params.MedId;
            const medicine = await Medicine.findById(id);
            if (!medicine) {
                res.status(404).send('Medicine not found');
            }
            res.json(medicine);
        } catch (err) { res.send(err) }
    }
    async insertMedicine(req, res) {
        try {
            let data = req.body;
            const medicine = new Medicine(data);
            const result = await medicine.save();
            res.json(result);
        } catch (err) { res.send(err) }
    }
    async deleteMedicine(req, res) {
        try {

            let id = req.params.MedId;
            const medicine = await Medicine.findByIdAndRemove(id);

            if (!medicine) {
                res.status(404).send('Medicine not found');
            }
            res.json({ message: 'Medicine deleted' });
        } catch (err) { res.send(err) }
    }
}
module.exports = MedicineDomain