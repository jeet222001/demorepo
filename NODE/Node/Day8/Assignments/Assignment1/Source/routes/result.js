var express = require('express');
var router = express.Router();
var verifytoken = require('../middleware/verifytoken')
var result = require('../data/result.json')

router.get('/', verifytoken, function (req, res) {
    res.json(result)
})

module.exports = router;