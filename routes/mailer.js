var express   = require('express');
var nodemailer = require('nodemailer');
var router    = express.Router();


router.post('/',function(req,res,next){
  
  var mailTransport = nodemailer.createTransport('SMTP', {
      service: 'Gmail',
      auth: {
          user: credentials.gmail.user,
          pass: credentials.gmail.password
      }
  });

});

module.exports = router;