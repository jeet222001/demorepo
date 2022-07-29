const res = require('express/lib/response');
const EmployeeModel = require('../../model/Employee/employee.schema');

class EmployeeDomain {

    //add employee
    async addEmployee(req, res) {
        try {
            const employee = new EmployeeModel(req.body);
            const newEmployee = await employee.save();
            res.send(newEmployee);
        } catch (err) { res.send(err); }
    }


    //get all employees
    async getAllEmployees(req, res) {
        try {
            const allEmployees = await EmployeeModel.find();
            if (allEmployees) res.send(allEmployees);
            else res.status(404).json({ message: 'There is No EmployeeData' });
        } catch (err) { res.send(err); }
    }

    //get employee by id
    async getEmployeeById(req, res) {
        try {
            const employee = await EmployeeModel.findById(req.params.id);
            if (employee) res.send(employee);
            else res.status(404).json({ message: 'There is No EmployeeData' });
        } catch (err) { res.send(err); }
    }

    //update employee
    async updateEmployee(req, res) {
        try {
            const employee = await EmployeeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (employee) res.send(employee);
            else res.status(404).json({ message: 'There is No EmployeeData' });
        } catch (err) { res.send(err); }
    }

    //delete employee
    async deleteEmployee(req, res) {
        try {
            const employee = await EmployeeModel.findByIdAndDelete(req.params.id);
            if (employee) res.send(employee);
            else res.status(404).json({ message: 'There is No EmployeeData' });
        } catch (err) { res.send(err); }
    }


    //get all assignments
    async getAllAssignments(req, res) {
        try {
            const employee = await EmployeeModel.findById(req.params.id);
            if (employee) res.send(employee.employeeAssignment);
            else res.status(404).json({ message: 'There is No EmployeeData' });
        } catch (err) { res.send(err); }
    }

    //get assignment by id
    async getAssignmentById(req, res) {
        try {
            const employee = await EmployeeModel.findById(req.params.id)
            if (employee) {
                var assignment = employee.employeeAssignment.find((val) => val.assignmentId == req.params.assignmentId);
                if (assignment) res.send(assignment);
                else res.status(404).json({ message: 'There is No AssignmentData' });
            }
            else res.status(404).json({ message: 'There is No EmployeeData' });
        } catch (err) { res.send(err); }
    }

    //add assignment
    async addAssignment(req, res) {
        try {
            const employee = await EmployeeModel.findById(req.params.id);
            
            employee.employeeAssignment.push(req.body);
            console.log(req.params.id);
            const newAssignment = await employee.save();
            console.log(employee);
            res.send(newAssignment);
        } catch (err) { res.send(err); }
    }

    //update assignment
    async updateAssignment(req, res) {
        try {
            const data = req.body;
            const id = req.params.id
            const assignmentId = req.params.assignmentId
            const employee = await EmployeeModel.findById(id);
            if (employee) {
                const result = await EmployeeModel.findOneAndUpdate(
                    { _id: id, "employeeAssignment.assignmentId": assignmentId },
                    { $set: { "employeeAssignment.$": data } },
                    { new: true }
                );
                if (result) {
                    res.send(result);
                } else res.status(404).json({ message: 'There is No AssignmentData' });
            } else res.status(404).json({ message: 'employee Not Found' })
        } catch (err) { res.send(err) }
    }

    //delete assignment
    async deleteAssignment(req, res) {
        try {
            const employee = await EmployeeModel.findById(req.params.id);
            if (employee) {
                const assignment = employee.employeeAssignment.find((val) => val.assignmentId == req.params.assignmentId);
                if (assignment) {
                    employee.employeeAssignment.id(assignment._id).remove();
                    const result = await employee.save();
                    res.send(result);
                } else res.status(404).json({ message: 'There is No AssignmentData' });
            } else res.status(404).json({ message: 'employee Not Found' })
        } catch (err) { res.send(err) }
    }

}

module.exports = EmployeeDomain