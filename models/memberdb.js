var db = require("./connectdb");
var knex = require("knex");

var member = db.Model.extend({
  tableName: 'members'
  //idAttribute: 'id',
});


module.exports = member