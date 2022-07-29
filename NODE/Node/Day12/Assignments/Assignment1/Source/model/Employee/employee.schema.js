const joi = require('@hapi/joi');
const mongoose = require('mongoose');

const assignment = {
    assignmentId: Number,
    assignmentCategory: String,
    assignmentName: String,
};

const employeeSchema = new mongoose.Schema({
    employeeId: Number,
    employeeName: String,
    employeeEmail: String,
    employeePhone: Number,
    employeeAssignment: [assignment],
});

const Employee = mongoose.model('Employee', employeeSchema);

function validateEmployee(employee){
    const schema = {
        employeeId: joi.number().required(),
        employeeName: joi.string().required(),
        employeeEmail: joi.string().required(),
        employeePhone: joi.number().required(),
        employeeAssignment: joi.array().required(),
    };

    return joi.validate(employee, schema);
}

module.exports = {EmployeeModel:Employee
    ,validateEmployee};