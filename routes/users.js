var express   = require('express');
var mysql     = require('mysql');
var connection = require('../model/connect');
var bodyParser = require('body-parser');

var router    = express.Router();
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true }));

/* GET users listing. */
router.get('/', function(req, res, next) {
      // var admin = 'select admin from member where admin=true';
      // if(connection.query(admin) === true){
      //   console.log('good');
      // }else{
        var sql = 'SELECT name,email,created_at FROM members';
        connection.query(sql, function(err, rows) {
          if (err) throw err;

          res.json({data:rows});
          // res.render('users',{title:'users list',results:results});
        });
      
      // }
      
  
});

module.exports = router;
