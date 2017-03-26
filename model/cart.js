var connection  = require('../model/connect');
var async       = require('async');
var knex        = require('../knexfile');
var cartItem        = require('./cart_item');
module.exports = class modelCart{
  getSameitem(item,res){
    var items = [];

    async.waterfall([
      async.apply(selectitem, item)
    ],function(err,result){
      if(err) throw err;
      return result;
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
      }else{
        callback(err,"刪除商品成功");
      }
    });
  }//delItem end

}//class modelCart end
//新增購物車商品
function selectitem(item,callback){
  var cartitem = new cartItem();

    cartitem.fetchAll().then(function(cartitemCollections){
      var cart = cartitemCollections.toJSON();
      if(cart.length == 0){
        cartitem.save({item})
        .then(function(rows){
          
        });
        console.log("=======================");
      }else{
        console.log("12212121212121211212121");
        for(var i=0;i<cart.length;i++){
          if(cart[i].product_id != item.product_id){
            cartitem.save({item},{method:'insert'})
            .then(function(rows){
              console.log(rows);
            });
            console.log("insert=======================");
          }else{
            var quantity = {quantity: parseInt(cart[i].quantity)+parseInt(item.quantity)};
            console.log(quantity);
            cartitem.where('product_id','=',item.product_id)
            .save({quantity},{method:'update'},{patch:true})
            .then(function(rows){
            });
            console.log("update=======================");
          }
        }
      }
    });
  // connection.query('select * from cart_item',function(err, result){
  //   if(err) throw err;
    
  //   if(result.length == 0){
  //     connection.query('insert into cart_item set ?',item,function(err,result){
  //       if(err) throw err;
  //     });
  //     callback(null,"新增商品成功");
  //   }else{
  //     var data= result.filter(match);
      // if(data.length != 0){
        
      //   for(var i =0;i<data.length;i++){
      //     if(data[i].product_id != item.product_id){
      //       console.log("新增商品");
      //       connection.query('insert into cart_item set ?',item,function(err,result){
      //       if(err) throw err;
      //     });
      //     callback(null,"新增商品成功");
          
      //     }else{
            
      //     console.log("更新商品");    
      //       var total = parseInt(data[i].quantity) + parseInt(item.quantity);
      //       connection.query('update cart_item set quantity= '+total+' where product_id= '+data[i].product_id,function(err,result){
      //         if(err) throw err;
      //       });
      //        callback(null,"更新成功");

      //     }
      //   }
      // } 
       
      
    //}
  //});
//}
//function match(result){
//  return result;
}

