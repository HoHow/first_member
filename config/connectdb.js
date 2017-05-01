var knex = require('knex')({
  client: 'mariasql',
  connection:{
    host     : 'localhost',
    user     : 'root',
    password : '',
    db : 'node_project'
  }
});
knex.on('query-error',function(obj){
  console.log('obj',obj);
});

var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
