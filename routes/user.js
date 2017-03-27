var express    = require('express');
var mysql      = require('mysql');
var fs         = require('fs');
var path       = require('path');
var connection = require('../models/connect');
var router    = express.Router();

router.get('/:id',function(req, res, next){
  var id = req.params.id;
  
  
  if(id != ''){
    connection.query('select * from members where id=?',id,function(err,rows){
      if(err) throw err;
      for(var i = 0;i<rows.length;i++){
        var data =rows[i];
      }
      
     
      // res.render('user',{title:'exprsss'},function(err,html){
      //   res.write(html);
        
        fs.readFile("./uploads/"+data.img_title,function(err, imgPath){ 
          if(err) throw err;

          res.json({code:200,data:data,img:imgPath});  
        });
      
        
      });
      
      
      
    
  }else{
    res.json({code:400,message:'收尋不到ID'});
  }
    
});


module.exports= router; 