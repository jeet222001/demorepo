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
    Fees:Fees,
    Result:Result,
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;