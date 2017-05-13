var db = require("./connectdb");
var knex = require('../knexfile');

module.exports = {
  member: () =>knex('members'),
  getall: (user) => {
    return this.member().where({'email':user.email}).update({'name':user.name,'password':user.password,'imgpath':user.imgpath})
  },
  login: (user) => {
    return this.member().where({'email':user.email}).select('name')
  }
}


 