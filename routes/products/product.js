var express     = require('express');
var connection  = require('../../model/connect');
var mysql       = require('mysql');
var add         = require('./add');
var products    = require('./products');
var upload      = require('./upload');
var del         = require('./del');
var router      = express.Router();



router.post('/',add);
router.get('/',products);
router.put('/:id',upload);
router.delete('/',del);



module.exports = router;