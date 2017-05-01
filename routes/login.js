var express    = require('express');
var router    = express.Router();
var controllerUser = require('../controllers/user');

var user = new controllerUser();
router.post('/',user.login);


module.exports= router; 