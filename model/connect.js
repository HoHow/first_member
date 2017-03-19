var config  = require('./config'); 
var mysql   = require('mysql');

var connection = mysql.createConnection(config);




module.exports = connection;