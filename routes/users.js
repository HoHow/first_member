var express   = require('express');
var bodyParser = require('body-parser');
var knex      = require('../knexfile');
var router    = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  knex.select('id','name','email','admin').from('members').then(function(rows){
    res.json(rows);
  });


});

module.exports = router;
