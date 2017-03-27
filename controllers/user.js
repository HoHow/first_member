var modelUser = require('../models/user.js');
var model     = new modelUser();
module.exports = class Users{
  register(req,res,next){
    var date = new Date();
    var user = {
      name:req.body.name,
      password:req.body.password,
      confirm_password:req.bdoy.confirm_password,
      email:req.body.email,
      img_title:req.body.img,
      created_at:date
    }

    model.register(user);
    
  }
}