var express   = require('express');
var mysql     = require('mysql');
var connection = require('../model/connect');
var bodyParser = require('body-parser');

var router    = express.Router();
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true }));

/* GET users listing. */
router.get('/', function(req, res, next) {
     
        var sql = 'SELECT id,name,email,admin FROM members';
        connection.query(sql, function(err, rows) {
          if (err) throw err;

          res.json(rows);
        });
      
      
  
});

module.exports = router;
