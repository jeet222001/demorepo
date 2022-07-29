const Department = require('../models/department.model');

class DepartmentDomain{
    async getAllDepartment(req, res){
        try{
            const departments = await Department.find();
            if(!departments){
                return res.status(404).json({
                    message: 'No departments found'
                });
            }
            res.json(departments);
        }catch(err){ res.send(err)}
    }
    async getDepartmentById(req, res){
        try{
            let id = req.params.DepId
            const department = await Department.findById(id);
            if(!department){
                res.status(404).send('Department not found');
            }
            res.json(department);
        }catch(err){ res.send(err)}
    }
    async insertDepartment(req, res){
        try{
            let data = req.body;
            const department = new Department(data);
          const result =  await department.save();
            res.json(result);
        }catch(err){ res.send(err)}
    }

    async deleteDepartment(req, res){
        try{
            const department= await Department.findByIdAndRemove(req.params.id);
            if(!department){
                res.status(404).send('Department not found');
            }
            res.json({message: 'Department deleted'});
        }catch(err){ res.send(err)}
    }
}
module.exports =DepartmentDomain