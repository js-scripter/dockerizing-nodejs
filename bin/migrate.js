// // migrate.js


// //get knex orm object
// const knex = require('../knex-db/knex-orm')

// //add user table
// // const dropped = await knex.schema.dropTable('users');
// knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     return knex.schema.createTable('users', function(t) {
//       t.increments('id').primary();
//       t.string('name', 100);
//       t.string('twitter_link',100);
//       t.string('linkedin_url',150);
//       t.string('blog_URL',150);
//       t.string('password',20);
//       t.string('email',50);
//     });
//   }else{
//     console.log('table exist hence not created exiting ....')
//     return process.exit(0);
//   }
// });

// migrate.js


//get knex orm object
const knex = require('../knex-db/knex-orm')

//add user table
const addUsersTable = (cb) => {
  // const dropped = await knex.schema.dropTable('users');
  knex.schema.hasTable('users').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('users', function(t) {
        t.increments('id').primary();
        t.string('name', 100);
        t.string('twitter_link',100);
        t.string('linkedin_url',150);
        t.string('blog_URL',150);
        t.string('password',20);
        t.string('email',50);
      });
      cb(true);
    }else{
      cb(true)
    }
  });
}


module.exports = {
  addUsersTable
}