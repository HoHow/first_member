var connection      = require('../model/connect');
var items = [];
module.exports = class controllerReport{
  displayMonth(req,res,next){
    
    var month= req.query.month;

    getmonth(month,res,function(message){
      //抓取message資料
      res.json({data:message});  
    });
      
     
    
  }

};
 
function getmonth(month,res,callback){
  connection.query('select o.* from orders as o',function(err,result){
    if(err) throw err;
    //資料跑迴圈
    for(var i=0;i<result.length;i++){
      //如果資料相符
      if(result[i].date.substr(5,2) === month){
        items.push(result[i]);
        callback(items);
      }else{
        //res.json({data:"沒有"+month+"月份的資料"});
        callback("沒有"+month+"月份的資料");
        
      }
    }
  });
}