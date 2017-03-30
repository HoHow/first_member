var express     = require('express');
var mysql       = require('mysql');
var connection  = require('../config/connect');
var router      = express.Router();
var controllerCart        = require('../controllers/cart');
var cart = new controllerCart();

//購物車新增商品
router.post('/', cart.insertData)
      .get('/', cart.cartItem)
      .post('/:id', cart.delitem)



module.exports = router;