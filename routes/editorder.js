var express           = require('express');
var mysql             = require('mysql');
var connection        = require('../model/connect');
var controllerOrder   = require('../controller/order');
var router            = express.Router();
var order = new controllerOrder();



router.post('/', order.editOrder);

module.exports = router;