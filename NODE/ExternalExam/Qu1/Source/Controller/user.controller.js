var UserDomain = require('../Domain/user.domain');
var express = require('express');
var router = express.Router();


router.get('/' , UserDomain.getAllUsers);
router.get('/:id' , UserDomain.getUserById);    
router.post('/' , UserDomain.createUser);
router.put('/:id' , UserDomain.updateUser);
router.delete('/:id' , UserDomain.deleteUser);


module.exports = router