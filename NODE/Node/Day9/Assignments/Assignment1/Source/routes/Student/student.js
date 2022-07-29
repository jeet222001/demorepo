let student = require('../../data/student.json')

class Student {

    student = student

    getAllStudent() {
            return this.student
     
    }
    getStudentById(studentId) {
        if (!studentId) return false
        else {
            const stud = this.student.find(stu => stu.id === +studentId)
            if (!stud) return false
            return stud
        }
    }

    getFees(studentId) {
        if (!studentId) return false
        else {
            const stud = this.student.find(stu => stu.id === +studentId)
            if (!stud) return false
            return stud.fees
        }
    }
    getResult(studentId) {
        if (!studentId) return false
        else {
            const stud = this.student.find(stu => stu.id === +studentId)
            if (!stud) return false
            return stud.result
        }
    }
}

module.exports = Student;