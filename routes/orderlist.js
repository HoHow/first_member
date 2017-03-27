var express       = require('express');
var connection    = require('../models/connect');
var router        = express.Router();
var controllerOrder         = require('../controllers/order')

var order = new controllerOrder();
router.post('/',order.orderList);


module.exports = router;
