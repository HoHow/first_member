
var knex = require("knex")({
    client: 'mariasql',
    connection:{
      host     : 'localhost',
      user     : 'root',
      password : '',
      db : 'node_project'
    }
});



module.exports = knex;
