var connection  = require('../model/connect');

module.exports = class report{
  getmonth(month,callback){
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
}