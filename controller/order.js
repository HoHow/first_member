var connection      = require('../model/connect');
var mail            = require('../model/mailer');
var date = new Date();
var async = require('async');
module.exports = class controllerOrder {
  //新增訂單
  insertData(req,res,next){
    var id = req.query.cart_id;
    console.log(id);
    connection.query('select c.member_id,ci.* from cart_item as ci,cart as c where c.id ='+id,function(err, result){
      if(err) throw err;
      for(var i=0;i<result.length;i++){
        var item = {
          product_id:result[i].product_id,
          member_id:result[i].member_id,
          quantity:result[i].quantity,
          payed:0,
          total:result[i].quantity * result[i].unit_price,
          date:date,
          order_number:result[i].cart_id,
          unit_price:result[i].unit_price
        };
        
        connection.query('insert into orders set ?',item,function(err ,result){
          if(err) throw err;
          
          
        });
        
        
        

      }
    });
    mail();
    res.json({message:"訂單成立"});
    next;
  }
  editOrder(req,res,next){
    var cartid   = req.query.cart_id;
    var data = req.body.data;
    var items = [];
    
    async.waterfall([
    
      function (callback){
        for(var i =0;i<data.length;i++){
          var item = {
            product_id:data[i].product_id,
            quantity:data[i].quantity,
            cart_id:data[i].cart_id,
            unit_price:data[i].unit_price
          };  
          items.push(item);
        }
        
        callback(null,items);
    },function (items,callback){
        for(var i=0;i<items;i++){
          console.log(items[i]);
          connection.query('update cart_item set ? where product_id='+items['product_id'],items,function(err,result){
            if(err) throw err;
            callback(null,err,result);    
          });
        }

      }
    ],function (err, result) {
        if(err) throw err;
          console.log(result);
      
    });

      
    res.end();
    // }


    
  } 
  
  
}

