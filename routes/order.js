var express       = require('express');
var router        = express.Router();
var controllerOrder         = require('../controllers/order')

var order = new controllerOrder();

router.post('/',order.insertData)
      .post('/orderlist',order.orderList)
      .get('/',order.cancelorder)

module.exports = router;
