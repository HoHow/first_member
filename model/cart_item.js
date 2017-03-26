var db = require("./connectdb");
var knex = require("knex");

var cartItem = db.Model.extend({
  tableName: 'cart_item'
  //idAttribute: 'id',
});


module.exports = cartItem