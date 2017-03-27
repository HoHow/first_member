var connection  = require('./connect');
var async       = require('async');
var knex        = require('../knexfile');
var cartItem        = require('./cart_item');
var newcart = new cartItem();
module.exports = class modelCart{
  
  //商品加入購物車
  postItem(item,callback){
    if(!item){
      callback("商品錯誤");
      return;
    }

    newcart.fetchAll().then(function(cartCollections){
      var cart = cartCollections.toJSON();
      
      for(var i =0;i<cart.length;i++){
        if(cart[i].product_id == item.product_id){
          callback("購物車已有此商品");
          return;

        }
      }
      newcart.save(item,{method:'insert'})
      .then(function(rows){
        callback("加入商品成功");
        return;
      });
    });
  }

  //取得商品列表
  getCartItem(res){
    connection.query('select p.name,ci.* from  products as p,cart as c,cart_item as ci where ci.cart_id=1 and ci.product_id=p.id',function(err, result){
      return res.json(result);
    });
  }//getCartItem end
  
  //購物車商品刪除
  delItem(id,callback){
    connection.query('delete from cart_item where product_id='+id,function(err,result){
      if(err){
        callback(err,"刪除商品失敗");
        return;
      }else{
        callback(err,"刪除商品成功");
        return;
      }
    });
  }//delItem end

}//class modelCart end



