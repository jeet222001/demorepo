var express = require('express');
var router = express.Router({ mergeParams: true });
var StudentDomain = require('../../../domain/Student/student.class');

class ResultController{
    static async getResult(req,res){
        const student = new StudentDomain();
        student.getResultDetails(req,res);
    }
}

router.get('/', ResultController.getResult);

module.exports = router;