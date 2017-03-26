
var knex = require("knex")({
  //development: {
    client: 'mysql',
    connection:{
      host     : 'localhost',
      user     : 'oliver',
      password : '123456',
      database : 'node_project'
    }
 // }
});



module.exports = knex;
