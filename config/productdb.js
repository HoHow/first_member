var db = require('./connectdb');
var knex = require('knex');

var product = db.Model.extend({
  tableName: 'products'
});

module.exports = product;
