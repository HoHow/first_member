var express   = require('express');
var mysql     = require('mysql');
var connection = require('../config/connect')
var bodyParser = require('body-parser');

var router    = express.Router();

router.put('/:id',function(req ,res ,next){
  var id = req.params.id;
  var name = req.body.name;
  var password = req.body.password;
  var confirm_password = req.body.confirm_password;

  if(password === confirm_password){
    if(name != ''){
      connection.query('UPDATE members SET ? WHERE id=?',[{ name: name,password: password },id]);
      res.json({states:200,message:"更新成功"});
    }
  }else{
    res.json({states:400,message:'密碼與確認密碼不符'});
  } 
 

 

});



module.exports = router;