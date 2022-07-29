const employees = require('../../data/employee.json')

class Employee {

    data = employees

    getAllEmployees() {
        return this.data;
    }

    getEmployeeById(id) {
        if (!id) {
            return 'Employee with this id not Found'
        } else {
            const employee = this.data.find(emp => emp.id === +id)
            if (!this.data) return false
            return employee
        }
    }



    getAssignment(employeeId, id) {
        let employee = this.getEmployeeById(employeeId)
        if (!employee) return false;
        if (!id) return employee.assignments
        else {
            const assignment = employee.assignments.find((ass) => ass.AssignmentId === +id)
            if (!assignment) return false
            return assignment
        }
    }

}
module.exports = Employee;