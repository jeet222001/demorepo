const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const verifyToken = ('../../middleware/verifytoken');
global.config = require('../../config');
const students = require('../../data/student.json');
const Student = require('./student');

let student = new Student();

router.get('/', (req, res) => {
    res.send(students)
});


router.get('/:id', (req, res) => {
    const stud = student.getStudentById(req.params.id);
    if (!stud) return res.status(404).send('Student with this id not Found')
    res.send(stud)
});

router.get('/:id/fees', (req, res) => {
    const stud = student.getFees(req.params.id);
    if (!stud) return res.status(404).send('Student with this id not Found')
    res.send(stud)
});

router.get('/:id/result', (req, res) => {
    const stud = student.getResult(req.params.id);
    if (!stud) return res.status(404).send('Student with this id not Found')
    res.send(stud)
})

module.exports = router;