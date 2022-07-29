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

router.post('', (req, res) => {
    const data = employee.addEmployee(req.body)
    if (!data) {
        return res.status(400).send('Employee with this id already exists')
    } else res.send(data)
});

router.put('/:id', (req, res) => {

    const data = employee.updateEmployee(req.params.id, req.body)
    if (!data) {
        return res.status(400).send('Employee with this id not Found')
    } else res.send(data)
});

router.delete('/:id', (req, res) => {
    const data = employee.deleteEmployee(req.params.id)
    if (!data) {
        return res.status(400).send('Employee with this id not Found')
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

router.post(`${commonAssignmentRoute}`, (req, res) => {

    const employee = employee.getEmployeeById(req.params.employeeId);
    if (!employee) {
        return res.status(400).send('Employee with this id not Found')
    }
    const data = employee.addAssignment(req.params.employeeId, req.body)
    if (data) {
        return res.status(400).send('Assignment with this id already exists')
    } else res.send(data)
});

router.put(`${commonAssignmentRoute}/:id`, (req, res) => {
    const employee = employee.getEmployeeById(req.params.employeeId);
    if (!employee) {
        return res.status(400).send('Employee with this id not Found')
    }
    const data = employee.updateAssignment(req.params.employeeId, req.params.id, req.body)
    if (!data) {
        return res.status(400).send('Assignment with this id not Found')
    } else res.send(data)
});

router.delete(`${commonAssignmentRoute}/:id`, (req, res) => {
    const employee = employee.getEmployeeById(req.params.employeeId);
    if (!employee) {
        return res.status(400).send('Employee with this id not Found')
    }
    const data = employee.deleteAssignment(req.params.employeeId, req.params.id)
    if (!data) {
        return res.status(400).send('Assignment with this id not Found')
    } else res.send(data)
});

module.exports =router