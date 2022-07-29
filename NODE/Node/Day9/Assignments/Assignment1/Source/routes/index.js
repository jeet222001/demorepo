var express = require('express');
var router = express.Router();
global.config = require('../config')
let jwt = require('jsonwebtoken');

router.post('/', (req, res) => {
  if (req.body.username == "admin" && req.body.password == "admin") {
    const token = jwt.sign(req.body, global.config.secretkey,
      {
        algorithm: global.config.algorithm,
        expiresIn: global.config.expiresIn
      });
    res.status(200).json({
      message: "login successful",
      jwtoken: token
    })
  }
  else {
    res.status(401).json({
      message: "login failed",
    });
  }
});

module.exports = router;
