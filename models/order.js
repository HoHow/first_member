var connection  = require('../config/connect');
var mail = require('./mailer');
var async = require('async');
module.exports = class modelOrder{
  createOrder(id,callback){
    var date = new Date();
    connection.query('select c.member_id,ci.*,m.email from cart_item as ci,cart as c,members as m where c.id ='+id,function(err, result){
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
      //寄信
      mail(result[0].email);
      callback({message:"訂單成立"});
    });
    
  }

  orderlist(id,callback){
    connection.query('select * from orders where member_id='+id,function(err,result){
      if(err) throw err;
      if(result == ''){
        callback({message:"此會員未有訂單"})
      }else{
        callback(result);
      }
    });
    
  }

  cancel(id,callback){
    connection.query('delete from orders where id='+id,function(err,result){
      if(err) throw err;
      callback("取消訂單成功");
    });
  }
}