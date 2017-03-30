
var modelOrder  = require('../models/order');
var knex = require('knex');
var date = new Date();
var async = require('async');
var order = new modelOrder();
module.exports = class controllerOrder {
  //新增訂單
  insertData(req,res,next){
    var id = req.query.cart_id;
    
    order.createOrder(id,function(message){
      res.json(message)
    });
    
    
  }
  //訂單清單
  orderList(req,res,next){
    var memberID = req.query.memberID;

    order.orderlist(memberID,function(message){
      res.json(message);
    });
    
  }
  //取消訂單
  cancelorder(req,res,next){
    var orderid = req.query.orderid;

    order.cancel(orderid,function(message){
      res.json(message);
    });
  }
  
}

