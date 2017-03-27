var express      = require('express');
var connection   = require('../../models/connect');
var multer       = require('multer');
var fs           = require('fs');
var upload       = multer({dest:'uploads/'});
var mysql        = require('mysql');
var moment       = require('moment');
var router       = express.Router();

router.post('/',upload.single('file'),function(req, res){
  var name        = req.body.product_name;
  var description = req.body.description;
  var price       = req.body.price;
  var quantity    = req.body.quantity;
  var img         = req.file;
  var date        = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');  
  var filename    = img.originalname;
  //rename file
  fs.rename(img.path,'./uploads/'+filename,function(err){
    if(err) throw err;
  });
  
  if(img.mimetype !== 'image/jpeg' || img.mimetype !== 'image/png'){
    res.json({states:400,message:'檔案格式jepg/png'});
  }else{
    if(name !== '' & description !== '' & price !== '' & img !== undefined){
      
      //sql data
      var data = {
        product_name:name,
        description:description,
        price:price,
        quantity:quantity,
        product_img:filename,
        created_at:date,
        updated_at:date,
      };
      
      connection.query('INSERT INTO products SET ?', data, function(err, result) {
        if(err) throw err;
        res.json({states:200,message:"新增成功"});
      });
    }else{
      res.json({states:400,message:'請確認所有資料已填寫'});
    }
  }

});


module.exports = router;