var express = require('express');
var router = express.Router();
var StudentDomain = require('../../domain/Student/student.class');
var feesRouter = require('./child/fee.controller')

class StudentController {
    //get all students
    static async getAllStudents(req, res) {
        const student = new StudentDomain();
        student.getAllStudents(req, res);
    }

    //to get a single student
    static async getStudent(req, res) {
        const student = new StudentDomain();
        student.getStudentById(req, res);
    }

    //to create an student
    static async createStudent(req, res) {
        const student = new StudentDomain();
        student.addStudent(req, res);
    }

    //to update an student
    static async updateStudent(req, res) {
        const student = new StudentDomain();
        student.updateStudent(req, res);
    }

    //to delete an student
    static async deleteStudent(req, res) {
        const student = new StudentDomain();
        student.deleteStudent(req, res);
    }
    static async getFees(req, res) {
        const student = new StudentDomain();
        student.getFeesDetails(req, res);
    }
}

router.use('/:studentId/fees', feesRouter);
//  router.get('/:studentId/fees', StudentController.getFees);
router.use('/:studentId/result', require('./child/result.controller'));
router.get('/', StudentController.getAllStudents);
router.get('/:studentId', StudentController.getStudent);
router.post('/', StudentController.createStudent);
router.put('/:studentId', StudentController.updateStudent);
router.delete('/:studentId', StudentController.deleteStudent);

module.exports = router;