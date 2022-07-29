const StudentModel = require('../../model/Student/student.schema');

class StudentDomain {

    //get all students
    async getAllStudents(req, res) {
        try {
            let students = await StudentModel.find();
            if (students) res.send(students);
            else res.status(404).json({ message: 'There is No StudentData' });
        } catch (err) { res.send(err); }
    }

    //get student by ID
    async getStudentById(req, res) {
        try {
            let student = await StudentModel.find({studentId:req.params.studentId});
            console.log(req.params.studentId);
            if (student) res.send(student);
            else res.status(404).json({ message: 'There is No StudentData' });
        } catch (err) { res.send(err); }
    }

    //add student
    addStudent(req, res) {
        try {
            let student = new StudentModel(req.body);
            student.save();
            res.send(student);
        } catch (err) { res.send(err); }
    }

    //update student
    async updateStudent(req, res) {
        try {
            let student = await StudentModel.findByIdAndUpdate(req.params.studentId, req.body, { new: true });
            if (student) res.send(student);
            else res.status(404).json({ message: 'There is No StudentData' });
        } catch (err) { res.send(err); }
    }

    //delete student
    async deleteStudent(req, res) {
        try {
            let student = await StudentModel.findByIdAndDelete(req.params.studentId);
            if (student) res.send('student deleted');
            else res.status(404).json({ message: 'There is No StudentData' });
        } catch (err) { res.send(err); }
    }

    //get FeesDetails of student
  async getFeesDetails(req, res) {
      try {
          let student = await StudentModel.find({studentId: req.params.studentId});
          console.log(student);
          if (student) res.send(student[0].Fees);
          else res.status(404).json({ message: 'There is No StudentData' });
      } catch (err) { res.send(err); }
    }

    //get ResultDetails of student
    async getResultDetails(req, res) {
        try {
            let student = await StudentModel.find({studentId:req.params.studentId});
            if (student) res.send(student[0].Result);
            else res.status(404).json({ message: 'There is No StudentData' });
        } catch (err) { res.send(err); }
    }
}

module.exports = StudentDomain;