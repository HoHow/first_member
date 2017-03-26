var connection      = require('../model/connect');
var mail            = require('../model/mailer');
var modelOrder  = require('../model/order');
// var connection      = require('../model/config');
var knex = require('knex');
var date = new Date();
var async = require('async');
var order = new modelOrder();
module.exports = class controllerOrder {
  //新增訂單
  insertData(req,res,next){
    var id = req.query.cart_id;
    
    order.createOrder(id,res);
    
    //res.end();
  }

  // editOrder(req,res,next){
  //   var cartid   = req.query.cart_id;
  //   var data = req.body.data;
  //   var items = [];
    
  //   async.waterfall([
  //     function (callback){
  //       for(var i =0;i<data.length;i++){
  //         var item = {
  //           product_id:data[i].product_id,
  //           quantity:data[i].quantity,
  //           cart_id:data[i].cart_id,
  //           unit_price:data[i].unit_price
  //         };  
  //         items.push(item);
  //       }
  //       callback(null,items);
  //   },function (items,callback){
  //       for(var i=0;i<items;i++){
  //         console.log(items[i]);
  //         connection.query('update cart_item set ? where product_id='+items['product_id'],items,function(err,result){
  //           if(err) throw err;
  //           callback(null,err,result);    
  //         });
  //       }
  //     }
  //   ],function (err, result) {
  //       if(err) throw err;
  //         console.log(result);
  //     });   
  //   res.end();
  // }//editOrder end
   
  //訂單清單
  orderList(req,res,next){
    var memberID = req.query.memberID;

    order.orderlist(memberID,res);
    
  }
  
}

