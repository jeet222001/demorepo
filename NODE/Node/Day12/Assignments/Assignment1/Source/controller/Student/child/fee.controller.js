var express = require('express');
var router = express.Router({ mergeParams: true });
var StudentDomain = require('../../../domain/Student/student.class');

class FeesController {

    static async getFees(req, res) {
        const student = new StudentDomain();
        student.getFeesDetails(req, res);
    }
}

router.get('/', FeesController.getFees);

module.exports = router;