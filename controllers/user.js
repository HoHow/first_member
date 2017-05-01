var modelUser = require('../models/user.js');
var model     = new modelUser();
var token     = require ('../config/token');
var fs = require('fs');
var jwt = require('jsonwebtoken');
module.exports = class Users{
  register(req,res,next){

    var user = {
      name:req.body.name,
      password:req.body.password,
      email:req.body.email
    };
    model.register(user,res);
  };

  login(req, res, next){
    var user = {
      password: req.body.password,
      email: req.body.email
    };

    model.login(user,res);
  };

  users(req, res, next){
    model.users(res);
  };
}