var express     = require('express');
var mysql       = require('mysql');
var connection  = require('../../models/connect');

var router      = express.Router();
var controllerReport        = require('../../controllers/report');

var report = new controllerReport();

router.get('/', report.displayMonth);



module.exports = router;