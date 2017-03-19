var connection = require('../model/connect');
var modelCart  = require('../model/cart');
var model = new modelCart();
module.exports = class controllerCart{
  //新增商品到購物車
  insertData(req, res, next){
    var item = {
      product_id:req.body.id,
      quantity:req.body.tempquantity,
      cart_id:1,
      unit_price:req.body.price
    };
    //新增商品
    model.getSameitem(item); 

    res.end();
  }; 

  cartItem(req,res,next){
    //var product_id = req.query.product_id;
    
    connection.query('select p.name,ci.* from  products as p,cart as c,cart_item as ci where ci.cart_id=1 and ci.product_id=p.id',function(err, result){
      res.json(result);
    });
     
  }

  delitem(req,res,next){
    var productId = req.params.id;
    console.log(productId);
    connection.query('delete from cart_item where product_id='+productId,function(err,result){
      if(err) throw err;

      res.json({message:"刪除商品成功"});
    });
    // res.end();
    next;
  }
};
