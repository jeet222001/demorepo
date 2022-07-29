var express = require('express');
var EmployeeDomain = require('../../../domain/Employee/employee.class');
var router = express.Router({ mergeParams: true });

class AssignmentController {
    //get all assignments
    static async getAllAssignment(req, res) {
        const employee = new EmployeeDomain();
        employee.getAllAssignments(req, res);
    }

    //to get a single assignment
    static async getAssignment(req, res) {
        const employee = new EmployeeDomain();
        employee.getAssignmentById(req, res);
    }

    //to create an assignment
    static async createAssignment(req, res) {
        const employee = new EmployeeDomain();
        employee.addAssignment(req, res);
    }

    //to update an assignment
    static async updateAssignment(req, res) {
        const employee = new EmployeeDomain();
        employee.updateAssignment(req, res);
    }

    //to delete an assignment
    static async deleteAssignment(req, res) {
        const employee = new EmployeeDomain();
        employee.deleteAssignment(req, res);
    }
}

router.get('/', AssignmentController.getAllAssignment);
router.get('/:assignmentId', AssignmentController.getAssignment);
router.post('/', AssignmentController.createAssignment);
router.put('/:assignmentId', AssignmentController.updateAssignment);
router.delete('/:assignmentId', AssignmentController.deleteAssignment);

module.exports = router;