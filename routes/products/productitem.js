var express      = require('express');
var mysql        = require('mysql');
var connection   = require('../../models/connect');
var router       = express.Router();


router.get('/:product_id',function(req, res){
  var id = req.params.product_id;
  
  connection.query('select * from products where id='+id,function(err,rows){
    if(err) throw err;
     
    res.json(rows);
  });
  
  
});


module.exports = router;