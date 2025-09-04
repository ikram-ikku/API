const {createPool} = require('mysql2/promise');
require('dotenv').config();

// Create a connection pool
const  db = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
   waitForConnections: true,
   
});

const connectDB = async () => {
  try {
    const connection = await db.getConnection();
    console.log('Connected to MySQL database');
    connection.release();
  } catch (error) {
    console.error('Error connecting to MySQL:', error.message);
  }
};

connectDB();

module.exports = db;