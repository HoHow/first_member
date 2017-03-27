var express     = require('express');
var mysql       = require('mysql');
var connection  = require('../models/connect');
var multer      = require('multer');
var bodyParser  = require('body-parser');
// var upload      = multer({ storage: multer.memoryStorage({}) });
var upload      = multer({dest:'uploads/'})
var FileReader  = require('filereader');
var fs          = require('fs'); 
var router      = express.Router();
//router.use(bodyParser.json()); // for parsing application/json
// router.use(bodyParser.urlencoded({ extended: true }));


router.post('/',upload.single('file'),function(req, res, next){
  var file = req.file;
  var filename = file.originalname;
  if(file === undefined || id === ''){
    res.json({code:400,message:'檔案或ID不能為空'});
  }else if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
    // 轉換base64
    // var filebase64 = file.buffer.toString('base64');


    var id = req.body.idd;
    fs.rename(file.path,'./uploads/'+filename,function(err){
      if(err) throw err;
      
    });

    
    connection.query('UPDATE members SET ? WHERE id=?',[{img_title:filename},id]);
    
    res.json({code:200,message:'更新成功'}); 
  }else{
    fs.unlink('./' + file.path);
    res.json({code:400,message:'檔案只能為jpeg或png'});
  }
  console.log(file.mimetype);
});














module.exports= router;