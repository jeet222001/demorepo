const mongoose = require('mongoose');


const Fees = {
    feesId: Number,
    amountPaid: Number,
    pendingAmount: Number,
};

const Result = {
    resultId: Number,
    marks: Number,
    grade: String,
};

const studentSchema = new mongoose.Schema({
    studentId: Number,
    studentName: String,
    studentEmail: String,
    studentPhone: Number,
    Fees: Fees,
    Result: Result,
});

const Student = mongoose.model('Student', studentSchema);

function validateStudent(student) {
    const schema = {
        studentId: joi.number().required(),
        studentName: joi.string().required(),
        studentEmail: joi.string().required(),
        studentPhone: joi.number().required(),
        Fees: joi.array().required(),
        Result: joi.array().required(),
    };

    return joi.validate(student, schema);
}

module.exports = {
    StudentModel: Student,
    validateStudent
};
