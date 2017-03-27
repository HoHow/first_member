var express    = require('express');
var router    = express.Router();
var controllerUser = require('../controllers/user');

var user = new controllerUser();
router.post('/',user.register);


module.exports= router; 