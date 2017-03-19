var express     = require('express');
var connection  = require('../model/connect');
var router      = express.Router();


router.get('/',function(req,res){
  connection.query('select cart.*,p.* from cart_item as cart,products as p where cart.product_id = p.product_id',function(err, result){
    if(err) throw err;
    for(var i =0;i<result.length;i++){
      // var array = JSON.parse("["+ result[i].product_id+"]");
      
      res.json({data:result[i]});
      // var abc = JSON.parse("["+ result[i].quantity+"]");
      //console.log(abc);

    }
    // res.json({data:result});
    // var da = {id:array,quantity:abc};
    // connection.query('select * from products where id = ?',da.id,function(err, result){
    //   for(var i=0;i<result.length;i++){
    //     console.log(result[i]);
    //   }
    // });
      
  });
  
});


module.exports = router;