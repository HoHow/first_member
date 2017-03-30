var express     = require('express');
var connection  = require('../../config/connect');
var mysql       = require('mysql');
var add         = require('./add');
var products    = require('./products');
var upload      = require('./upload');
var del         = require('./del');
var item = require('./productitem');
var router      = express.Router();



router.post('/',add);
router.get('/',products);
router.put('/:id',upload);
router.delete('/',del);
// router.get('/item/:id',item);



module.exports = router;