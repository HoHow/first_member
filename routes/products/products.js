var express      = require('express');
var mysql        = require('mysql');
var connection   = require('../../model/connect');
var router       = express.Router();


router.get('/',function(req, res){
  var page = req.query.page;
  const pageSize = 10;
  console.log(page);
  connection.query('select * from products limit ?,?',[(page-1)*pageSize,pageSize],function(err,rows){
    if(err) throw err;
    
    res.json({data:rows});
  });

});


module.exports = router;