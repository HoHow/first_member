var connection  = require('./connect');
var memberdb        = require('./memberdb');
var member = new memberdb();
module.exports = class user{
  register(user){
    member.save(user,{method:'insert'})
    .then(function(rows){
      
    });
  }
}