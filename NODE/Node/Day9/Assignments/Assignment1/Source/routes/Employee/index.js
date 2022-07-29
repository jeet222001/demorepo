const express = require('express')
const Employee = require('./employee')

const employee = new Employee()
const router = express.Router()

/**
 * Employee routes
 * * get
 * * get/:id
 * * put
 * * delete
 * * post
 */

router.get('', (req, res, next) => {
    res.send(employee.getAllEmployees())
})

router.get('/:id', (req, res) => {
    const data = employee.getEmployeeById(req.params.id);
    if (!data) {
        return res.status(404).send('Employee with this id not Found')
    } else res.send(data)
});

/**
 * Assignments routes
 * * get
 * * get/:id
 * * put
 * * delete
 * * post
 */
const commonAssignmentRoute = '/:employeeId/child/assignments';

router.get(`${commonAssignmentRoute}`, (req, res) => {
    const data = employee.getAssignment(req.params.employeeId)
    if (!data) {
        return res.status(400).send('Employee with this id not Found')
    } else res.send(data)
});

router.get(`${commonAssignmentRoute}/:id`, (req, res) => {
    const data = employee.getEmployeeById(req.params.employeeId);
    if (!data) {
        return res.status(400).send('Employee with this id not Found')
    }
    const assignment = employee.getAssignment(req.params.employeeId, req.params.id);
    if (!assignment) {
        return res.status(400).send('Assignment with this id not Found')
    }
    res.send(assignment)
});



module.exports =router