var express       = require('express');
var connection    = require('../model/connect');
var router        = express.Router();
var controllerOrder         = require('../controller/order')

var order = new controllerOrder();
//router.post('/',order.orderList);
router.post('/',function(req,res,next){
  
});

module.exports = router;
