var express       = require('express');
var connection    = require('../model/connect');
var router        = express.Router();
var controllerOrder         = require('../controller/order')

var order = new controllerOrder();

router.post('/',order.insertData);

module.exports = router;
