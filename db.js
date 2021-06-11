const { Client } = require('pg');
require('dotenv').config();

const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
// {
// 	user: process.env.PG_USER,
// 	host: process.env.PG_HOST,
// 	database: process.env.PG_DATABASE,
// 	password: process.env.PG_PASSWORD,
// 	port: process.env.PG_PORT,
// }

const proConfig = process.env.DATABASE_URL;

const client = new Client({
	connectionString: process.env.NODE_ENV === 'production' ? proConfig : devConfig,
	ssl: {
		rejectUnauthorized: false,
	},
});

module.exports = client;
