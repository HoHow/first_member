var jwt = require('jsonwebtoken');


var token = {
  get:get,
  verify:verify,
}

function get(info){
  return jwt.sign(info,'member', { expiresIn: 60*60*24*14 });
}

function verify(auth_token, callback){
  jwt.verify(auth_token, 'member',function(err,decode){
    if(err){
      callback(true,{message:'錯誤token'});
    }else {
      callback(false,decode);
    }
  });
}


module.exports = token;