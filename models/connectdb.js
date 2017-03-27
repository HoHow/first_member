var knex = require('knex')({
  client: 'mysql',
  connection:{
    host     : 'localhost',
    user     : 'oliver',
    password : '123456',
    database : 'node_project'
  }
});
knex.on('query-error',function(obj){
  console.log('obj',obj);
});

var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
