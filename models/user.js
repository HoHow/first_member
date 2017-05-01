//var connection  = require('../config/connect');
var memberdb        = require('../config/memberdb');
var member  = new memberdb();
var jwt = require('jsonwebtoken');
module.exports = class user{
  register(user,res){
    member.save(user).then(function(rows){
      if(!rows){
        res.json({message:'會員註冊失敗'});
      }else{
        res.json({message:'會員註冊成功'});
      }
    });
  }

  login(user,res){
    
    member.query(function(qb){
      qb.where('email','=',user.email).andWhere('password','=',user.password)
    }).fetchAll().then(function(row){
      if(row.toJSON().length === 1){
        var token = get(user);
        res.json({message:'登入成功',token:token});
      }else{
        res.json({message:'登入失敗'});
      }
      //console.log(row.toJSON());
    });
    // member.where('name','=',user.email).andWhere('password','=',user.password).fetchAll()
    // .then(function(row){
    //   if(row.toJSON().length === 1){
    //     res.json({message:'登入成功'});
    //   }else{
    //     res.json({message:'登入失敗'});
    //   }

    // });
  }

  users(res){
    member.fetchAll().then(function(rows){
      var collection = rows.toJSON();
      if(!collection){
        res.json({message:'查無資料'});
      }else{
        res.json({users:collection});
      }
    });
  }
};

function get(info){
  return jwt.sign(info,'goodgoodjob', { expiresIn: 60*60*24*14 });
}