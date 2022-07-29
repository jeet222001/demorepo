var express = require('express');
var router = express.Router();
let jwt = require('jsonwebtoken');
let verifyToken = require('./verifytoken')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', verifyToken, function (req, res, next) {

  let customerData = [
    { customerId: 1, customerName: 'Mahfuz Bappy' },
    { customerId: 2, customerName: 'Shanim Uddin' },
    { customerId: 3, customerName: 'Ishani Isha' }
  ];
  res.json(customerData);
});

router.use(function (req, res, next) {
  var token = req.headers['x-access-token'];
  console.log(token);

})



module.exports = router;
