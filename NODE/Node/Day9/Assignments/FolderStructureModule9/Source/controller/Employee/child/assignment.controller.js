const express = require('express')
const Employee = require('../../../Domain/employee')

const employee = new Employee()
const router = express.Router()

/**
 * Assignments routes
 * * get
 * * get/:id
 * * put
 * * delete
 * * post
 */


router.get('/', (req, res) => {
    // const data = employee.getEmployeeById(req.params.id);
    // res.send(data.assignments);
    console.log(req.params.id);
    // console.log(data.assignments);
});

router.get('/:assignmentId', (req, res) => {
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


module.exports = router