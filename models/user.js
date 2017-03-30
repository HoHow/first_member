var connection  = require('../config/connect');
var memberdb        = require('../config/memberdb');
var member = new memberdb();
module.exports = class user{
  register(user){
    member.save(user,{method:'insert'})
    .then(function(rows){
      
    });
  }
}