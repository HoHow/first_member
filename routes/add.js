var express       = require('express');
var mysql         = require('mysql');
var connection    = require('../models/connect');
var bodyParser    = require('body-parser');
var router        = express.Router();
// router.use(bodyParser.json()); // for parsing application/json
// router.use(bodyParser.urlencoded({ extended: true }));

router.post('/',function(req, res, next){
  var data = {name:req.body.name,email:req.body.email,password:req.body.password,confirm_password:req.body.confirm_password};
  
  connection.connect();
  connection.query('SELECT * FROM members',function(err,row){
    if(err) throw err;

    for(var i =0;i<row.length;i++){

      if(row[i].email === data.email){
        res.json({states:400,message:'已有相同的email'});
      }else{
        if(data.password !== data.confirm_password){
          res.json({states:400,message:'確認密碼與密碼不同'});
        }else{
          connection.query('INSERT INTO members SET ?', data, function(err, result) {
          if(err) throw err;
          res.json({states:200,message:"新增成功"});
          });
        }
      }
    }
  });
    connection.end();
});


module.exports = router; 