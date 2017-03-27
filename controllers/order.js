var connection      = require('../models/connect');
var mail            = require('../models/mailer');
var modelOrder  = require('../models/order');
// var connection      = require('../model/config');
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
    
    //res.end();
  }
  //訂單清單
  orderList(req,res,next){
    var memberID = req.query.memberID;

    order.orderlist(memberID,function(message){
      res.json(message);
    });
    
  }
  cancelorder(req,res,next){
    var orderid = req.query.orderid;

    order.cancel(orderid,function(message){
      res.json(message);
    });
  }
  
}

