var express     = require('express');
var mysql       = require('mysql');
var connection  = require('../../model/connect');

var router      = express.Router();
var controllerReport        = require('../../controller/report');

var report = new controllerReport();

router.get('/', report.displayMonth);



module.exports = router;