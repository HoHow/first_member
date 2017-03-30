var connection      = require('../config/connect');
var modelreport     = require('../models/report');
var model           = new modelreport();
var items = [];
module.exports = class controllerReport{
  displayMonth(req,res,next){
    var year  = req.query.year;
    var month = req.query.month;

    model.getmonth(year,month,function(message){
      //抓取message資料
      res.json({message:message});  
    });
      
     
    
  }

};
 
