const knex = require('knex');
module.exports = knex({
    client: 'pg',
    connection: 'postgresql://postgres:pg@localhost:5431/ums',
    searchPath: ['knex', 'public'],
});

