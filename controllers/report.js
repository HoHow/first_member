var connection      = require('../models/connect');
var modelreport     = require('../models/report');
var model           = new modelreport();
var items = [];
module.exports = class controllerReport{
  displayMonth(req,res,next){
    
    var month= req.query.month;

    model.getmonth(month,function(message){
      //抓取message資料
      res.json({data:message});  
    });
      
     
    
  }

};
 
