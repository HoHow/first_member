var express     = require('express');
var mysql       = require('mysql');
var connection  = require('../models/connect');

var router      = express.Router();
var controllerCart        = require('../controllers/cart');

var cart = new controllerCart();

//購物車商品列表
router.get('/', cart.cartItem);

 

module.exports = router;