var express = require('express');
var router = express.Router();
var verifytoken = require('../middleware/verifytoken')
var fees = require('../data/fees.json')

router.get('/', verifytoken,function (req, res) {
    res.json(fees)
})

module.exports = router;