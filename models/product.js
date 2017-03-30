var product = require('../config/productdb');
var productDB = new product();
module.exports = class product{
  postItem(item,callback){
    productDB.save(item,{method:'insert'})
    .then(function(rows){
      callback(false,{message:"新增產品成功"});
    }).catch(function(e){
      console.log(e);
      callback(true,{message:"新增產品失敗"});
    });
  }
}