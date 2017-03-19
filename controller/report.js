var connection      = require('../model/connect');
var items = [];
module.exports = class controllerReport{
  displayMonth(req,res,next){
    
    var month= req.query.month;

    getmonth(month,function(message){
      //抓取message資料
      res.json({data:message});  
      
      //console.log(message);
    });
      
     
    
  }

};
 
function getmonth(month,callback){
  connection.query('select o.* from orders as o',function(err,result){
    if(err) throw err;
      //如果資料相符
      if(result[0].date.substr(5,2) === month){
        items.push(result[0]);
        callback(items);
      }else{
        callback("沒有"+month+"月份的資料");
      }
    
  });
}