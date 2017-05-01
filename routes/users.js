var express     = require('express');
var bodyParser  = require('body-parser');
var knex        = require('../knexfile');
var user        = require('../controllers/user');
var userctr     = new user();
var router      = express.Router();

/* GET users listing. */
router.get('/',userctr.users);
  //分出object
  // knex.select('id','name','email','admin').from('members').then(function(rows){
  //   res.json(rows);
  // });



module.exports = router;
