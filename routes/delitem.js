var express     = require('express');
var mysql       = require('mysql');
var connection  = require('../models/connect');

var router      = express.Router();
var controllerCart        = require('../controllers/cart');

var cart = new controllerCart();

//購物車刪除商品
router.post('/:id', cart.delitem);



module.exports = router;