var modelUser = require('../models/user.js');
var model = new modelUser();
var token = require('../config/token');
var fs = require('fs');
var jwt = require('jsonwebtoken');
module.exports = class Users {
  register(req, res, next) {

    var user = {
      name: req.body.name,
      password: req.body.password,
      email: req.body.email
    };
    model.register(user, res);
  };

  login(req, res, next) {
    var user = {
      password: req.body.password,
      email: req.body.email
    };

    model.login(user, res);
  };

  users(req, res, next) {
    model.users(res);
  };

  edit(req, res, next) {
    //圖片檔案
    let file = req.file
    //檢查類型、大小
    checkImageType(file)
    //圖片路徑
    var filepath = file.path


    var user = {
      password: req.body.password,
      email: req.body.email,
      imgpath: filepath
    }

    model.edit(user, res);

  }
}

function checkImageType(image) {
  var maxSize = 2 * 1000 * 1000;
  if(image == undefined || image == ''){
    throw new Error('請上傳大頭照')
  }
  if (image.mimetype !== 'image/png') {
    fs.unlink('./uploads/' + image.filename);
    throw new Error('大頭照格式錯誤')
  } else {
    if (image.size > maxSize) {
      fs.unlink('./uploads/' + image.filename);
      throw new Error('大頭照超過2MB')
    } else {
      return true;
    }
  }
}