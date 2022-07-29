var express = require('express');
var router = express.Router();
var EmployeeDomain = require('../../domain/Employee/employee.class');

class EmployeeController{
    //get all employees
    static async getAllEmployees(req,res){
        const employee = new EmployeeDomain();
        employee.getAllEmployees(req,res);
    }

    //to get a single employee
    static async getEmployee(req,res){
        const employee = new EmployeeDomain();
        employee.getEmployeeById(req,res);
    }

    //to create an employee
    static async createEmployee(req,res){
        const employee = new EmployeeDomain();
        employee.addEmployee(req,res);
    }

    //to update an employee
    static async updateEmployee(req,res){
        const employee = new EmployeeDomain();
        employee.updateEmployee(req,res);
    }

    //to delete an employee
    static async deleteEmployee(req,res){
        const employee = new EmployeeDomain();
        employee.deleteEmployee(req,res);
    }
}

router.use('/:id/assignments',require('./Assignment/assignment.controller'));
router.get('/', EmployeeController.getAllEmployees);
router.get('/:id', EmployeeController.getEmployee);
router.post('/', EmployeeController.createEmployee);
router.put('/:id', EmployeeController.updateEmployee);
router.delete('/:id', EmployeeController.deleteEmployee);

module.exports = router;