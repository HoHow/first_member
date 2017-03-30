var express      = require('express');
var mysql        = require('mysql');
var connection   = require('../../config/connect');
var router       = express.Router();


router.get('/',function(req, res){
  var page = req.query.page;
  const pageSize = 10;

  if(page === NaN || page === undefined){
    page = 1;
    
  }
  connection.query('select * from products limit ?,?',[(page-1)*pageSize,pageSize],function(err,rows){
    if(err) throw err;
     
    res.json(rows);
  });

});


module.exports = router;