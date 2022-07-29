const employees = require('../../employee.json')

class Employee{

    data = employees

    getAllEmployees(){
        return this.data;
    }

    getEmployeeById(id){
        if(!id){
            return 'Employee with this id not Found'
        }else{
            const employee =this.data.find(emp => emp.id === +id)
            if(!this.data)return false
            return employee
        }
    }

    addEmployee(employee){
        this.data.push(employee)
        return this.data
    }
    

    updateEmployee(id,employee){
        const index = this.data.findIndex(emp => emp.id === +id)
        if(index === -1){
            return 'Employee with this id not Found'
        }else{
            this.data[index] = employee
            return this.data
        }
    }

    deleteEmployee(id){
        const index = this.data.findIndex(emp => emp.id === +id)
        if(index === -1){
            return 'Employee with this id not Found'
        }else{
            this.data.splice(index,1)
            return this.data
        }
    }

    getAssignment(employeeId,id){
        let employee = this.getEmployeeById(employeeId)
        if(!employee)return false;
        if(!id)return employee.assignments
        else {
            const assignment = employee.assignments.find((ass) => ass.AssignmentId === +id)
            if(!assignment)return false
            return assignment
        }
    }

    addAssignment(employeeId,assignment){
        const employee = this.getEmployeeById(employeeId);
        if(!employee)return false;

        employee.assignments.push(assignment)
        return employee;
    }
  

    upDateAssignment(employeeId,id,assignment) {
        const employee = this.getEmployeeById(employeeId);
        if(!employee)return false;

        const currentAssignment = this.getAssignment(employeeId, id);
        if (!assignment) return false;

        employee.assignments = employee.assignments.map((value) => {
            if (value.id === +id) {
                return assignment;
            } else {
                return value;
            }
        });

        return currentAssignment;
    }

    deleteAssignment(employeeId,assignmentId){
        const employee = this.getEmployeeById(employeeId);
        if(!employee)return false;

        const index = employee.assignments.findIndex(ass => ass.id === assignmentId)
        if(index === -1){
            return 'Assignment with this id not Found'
        }else{
            employee.assignments.splice(index,1)
            return employee.assignments
        }
    }
}
module.exports = Employee;