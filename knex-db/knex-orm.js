const knex = require('knex');
module.exports = knex({
    client: 'pg',
    // connection: 'postgresql://postgres:pg@localhost:5431/ums',
    connection: `postgresql://${process.env.dbuser}:${process.env.dbpassword}@${process.env.dbhost}:${process.env.dbport}/${process.env.database}`,
    searchPath: ['knex', 'public'],
});

