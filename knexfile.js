
var knex = require("knex")({
    client: 'mariasql',
    connection:{
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'node_project'
    }
});



module.exports = knex;
