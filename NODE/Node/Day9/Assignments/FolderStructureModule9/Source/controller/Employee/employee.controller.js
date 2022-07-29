const express = require('express')
const Employee = require('../../Domain/employee')

const employee = new Employee()
const router = express.Router()


router.get('/', (req, res) => {
    res.send(employee.getAllEmployees())
});


router.get('/:id', (req, res) => {
    const data = employee.getEmployeeById(req.params.id);
    if (!data) {
        return res.status(404).send('Employee with this id not Found')
    } else res.send(data)
});


router.get('/:id/child/assignments', (req, res) => {
    const data = employee.getEmployeeById(req.params.id);
    res.send(data.assignments);
});

router.get('/:id/child/assignments/:assignmentId', (req, res) => {
    const data = employee.getEmployeeById(req.params.id);
    if (!data) {
        return res.status(400).send('Employee with this id not Found')
    }
    const assignment = employee.getAssignment(req.params.id, req.params.assignmentId);
    if (!assignment) {
        return res.status(400).send('Assignment with this id not Found')
    }
    res.send(assignment)
})

module.exports = router;
