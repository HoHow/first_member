var express      = require('express');
var mysql        = require('mysql');
var connection   = require('../../config/connect');
var multer       = require('multer');
var upload       = multer({dest:'uploads/'});
var moment       = require('moment');
var fs           = require('fs');
var router       = express.Router();


router.put('/:id',upload.single('file'),function(req, res){
  var id          = req.params.id;
  var name        = req.body.product_name;
  var description = req.body.description;
  var price       = req.body.price;
  var img         = req.file;
  var update_date = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
  var filename = img.originalname;

  
  if(id !== ''){
    if(name !== '' & description !== '' & price !== '' & img !== undefined){
      //圖片重新命名
      fs.rename(img.path,'./uploads/'+filename,function(err){
        if(err) throw err;    
      });

      var data ={    
        name:name,
        description:description,
        price:price,
        img:filename,
        updated_at:update_date
      };

       
      connection.query('UPDATE products SET ? WHERE product_id=?',[data,id]);
      res.json({states:200,message:'更新成功'});
      }else{
        res.json({states:400,message:'欄位未填'});
      } 
  }else{
    res.json({states:400,message:'找不到ID'});
  }
});
 


module.exports = router;


