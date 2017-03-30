var express           = require('express');
var mysql             = require('mysql');
var connection        = require('../config/connect');
var controllerOrder   = require('../controllers/order');
var router            = express.Router();
var order = new controllerOrder();



//router.post('/', order.editOrder);

module.exports = router;