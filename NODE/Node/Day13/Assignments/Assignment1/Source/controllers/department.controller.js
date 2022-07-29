var express = require('express');
var router = express.Router();
const DepartDomain = require('../domain/department.domain');

class DepartmentController{
    static async getAllDepartment(req, res){
        const department = new DepartDomain();
        department.getAllDepartment(req, res);
    }
    static async getDepartmentById(req, res){
        const department = new DepartDomain();
        department.getDepartmentById(req, res);
    }
    static async insertDepartment(req, res){
        const department = new DepartDomain();
        department.insertDepartment(req, res);
    }
    static async deleteDepartment(req, res){
        const department = new DepartDomain();
        department.deleteDepartment(req, res);
    }
}

router.get('/', DepartmentController.getAllDepartment);
router.get('/:DepId', DepartmentController.getDepartmentById);
router.post('/', DepartmentController.insertDepartment);
router.delete('/:DepId', DepartmentController.deleteDepartment);

module.exports = router;
