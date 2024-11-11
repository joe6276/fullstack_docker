import {Pool} from 'pg'
require('dotenv').config();

const pool = new Pool({
  host: 'postgres',
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});


export default pool