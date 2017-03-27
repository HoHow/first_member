var express     = require('express');
var connection  = require('../../models/connect');
var fs          = require('fs');
var router      = express.Router();



router.delete('/',function(req, res){
  var id = req.body.id;
  if(id !== ''){
    var word = id.split(',').map(Number);
    removeProduct(word,function(message){
      res.json({states:404,message:message})
    });
      res.json({states:200,message:'商品已刪除'});
  }else{
    res.json({states:404,message:'ID不能為空'});
  }
});



function removeProduct(word,callback){
  connection.query('select * from products where product_id IN('+word+')',function(err,rows){
    for(var i=0;i<rows.length;i++){
      var img =rows[i].product_img;
      // console.log(process.cwd())
      fs.unlink('./uploads/'+img,function(err){
        if(err){
          callback(({message:'檔案已被刪除'}));
        }
      });
    }
  });
  connection.query('delete from products where product_id IN('+word+') ',function(err, rows){
    if(err) throw err;
  });
}
  
module.exports = router;