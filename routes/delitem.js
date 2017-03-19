var express     = require('express');
var mysql       = require('mysql');
var connection  = require('../model/connect');

var router      = express.Router();
var controllerCart        = require('../controller/cart');

var cart = new controllerCart();

//購物車刪除商品
router.post('/:id', cart.delitem);



module.exports = router;