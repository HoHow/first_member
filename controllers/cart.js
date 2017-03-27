var connection = require('../models/connect');
var modelCart  = require('../models/cart');
var knex      = require('../knexfile');
var model = new modelCart();
module.exports = class controllerCart{
  //新增商品到購物車
  insertData(req, res, next){
    //商品物件
    var item = {
      product_id:req.body.id,
      cart_id:1,
      quantity:req.body.tempquantity,
      unit_price:req.body.price
    };
    //新增商品
    model.postItem(item,function(result){
      res.json({message:result});
    }); 

    
  }; 


  //購物車商品列表
  cartItem(req,res,next){
    model.getCartItem(res);
  }

  //刪除購物車商品
  delitem(req,res,next){
    //商品ID
    var productId = req.params.id;
    
    model.delItem(productId,function(err,message){

      if(err){
        res.json({message:message});
      }else{
        res.json({message:message});
        
      }
    });
  }
};
