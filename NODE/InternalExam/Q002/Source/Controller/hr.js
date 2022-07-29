const BasicUser = require('../Model/user');
const HrUser =require('../Model/hr');

var express = require('express');
var router= require('router');

router.post('/users/:userId', async (req,res)=>{
    try{
        var user = await new BasicUser(req.body);
        res.send(user);
    }catch(err){
        console.log(err)
    }

});
router.put('/users/:userId', async (req,res)=>{
    try{
        var user = await  BasicUser.findByIdAndUpdate(req.body);
        if(!user) return res.status(404).send("Not Found")

    }catch(err){
        console.log(err)
    }
})