const nodemailer = require('nodemailer');

module.exports = function(result){
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: 'xxx',
              pass: 'xxx'
          }
      });

      // setup email data with unicode symbols
      let mailOptions = {
          from: '"購物商城" <wumingho@gmail.com>', // sender address
          to: 'wumingho@gmail.com', // list of receivers
          subject: '訂單已完成' // Subject line
          // html: '<b>訂購商品如下</b>'+
          //     '<thead><tr><th>商品名稱</th><th>單價</th><th>總價</th></tr></thead>'+
          //     '<tbody><tr><td>'+result+'</td></tr></tbody>'
          
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
      });
}