var connection = require('../model/connect');
var async      = require('async');

module.exports = class modelCart{
  getSameitem(item){
    var items = [];

    async.waterfall([
      async.apply(selectitem, item)
    ],function(err,result){
      console.log(result);
    });
      // connection.query('select * from cart_item',function(err,result){  
      //   if(err) throw err;
      //   result.map(function(obj){
      //     console.log(obj);
      //     if(obj.product_id == item.product_id){
      //       var total = parseInt(obj.quantity) + parseInt(item.quantity);
      //       connection.query('update cart_item set quantity= '+total+' where product_id= '+obj.product_id,function(err,result){
      //         if(err) throw err;
      //       });
      //     }
      //       console.log("insert");
      //       connection.query('insert into cart_item set ?',item,function(err,result){
      //         if(err) throw err;
      //       });
      //   });      
      // });
  }
    
}

function selectitem(item,callback){


  connection.query('select * from cart_item',function(err, result){
    if(err) throw err;
    
    if(result.length == 0){
      //console.log("insert");
      connection.query('insert into cart_item set ?',item,function(err,result){
        if(err) throw err;
      });
      callback(null,"新增商品成功");
    }else if(result[0].product_id == undefined || result[0].product_id != item.product_id){
      connection.query('insert into cart_item set ?',item,function(err,result){
        if(err) throw err;
      }); 
      callback(null,"新增商品成功");

    }else{
      result.map(function(obj){    
        if(obj.product_id == item.product_id){
          var total = parseInt(obj.quantity) + parseInt(item.quantity);
          connection.query('update cart_item set quantity= '+total+' where product_id= '+obj.product_id,function(err,result){
            if(err) throw err;
          });
                  
        }
      });   
    }
  });
}
