const mongoose = require('mongoose');
const assignment = {
    assignmentId:Number,
    assignmentCategory:String,
    assignmentName:String,
};

const employeeSchema = new mongoose.Schema({
    employeeId:Number,
    employeeName:String,
    employeeEmail:String,
    employeePhone:Number,
    employeeAssignment:[assignment],
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;