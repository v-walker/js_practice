const pgp = require('pg-promise')();

const connectionString = {
    host: 'localhost',
    port: 5432,
    database: 'todos',
    user: 'postgres',
};

const db = pgp(connectionString);

module.exports = db;