var modelProduct = require('../models/product');
var fs = require('fs');
var model = new modelProduct();
module.exports = class product{
  addProduct(req,res,next){
    var date = new Date();
    var img = req.file;
    photoRename(img,function(err,message){
      res.status(err?400:200).json(message);
    });
    var item = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
      img: img,
      created_at: date,
      updated_at: date
    }
    console.log(item);
    // model.postItem(item,function(err,message){
    //   res.status(err?400:200).json(message);
    // });

  }
}


function photoRename(img,callback){
  var filename    = img.originalname;
  fs.rename(img.path,'./uploads/'+filename,function(err){
    if(err) throw err;
  });
  console.log(img.mimetype);
  if(img.mimetype !== 'image/jpeg' || img.mimetype !== 'image/png'){
    callback(true,{message:"檔案格式jepg/png"});
  }
}
