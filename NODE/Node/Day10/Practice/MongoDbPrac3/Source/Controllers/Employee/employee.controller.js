const express = require('express');
const router = express.Router();
const Employee = require('../../models/employee.model');

router.get('/', (req, res) => {
    Employee.find()
        .then(employees => res.json(employees))
        .catch(err => res.status(404).json({ message: 'No employees found' }));
});
router.post('/addemployee', async (req, res) => {
    const { employeeId, employeeName, employeeEmail, employeePhone, employeeAssignment } = req.body;
    const newEmployee = new Employee({
        employeeId,
        employeeName,
        employeeEmail,
        employeePhone,
        employeeAssignment
    });
    try {
        const savedEmployee = await newEmployee.save();
        res.json(savedEmployee);
    } catch (err) {
        res.json({ message: err });
    }
})




module.exports = router