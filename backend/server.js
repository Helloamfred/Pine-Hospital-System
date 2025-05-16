// server.js
const express = require('express');
const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const bcrypt = require('bcryptjs');
// const dotenv = require('dotenv');


// dotenv.config();

const app = express();

// Middleware
app.use(express.json());
// app.use(cors());
// app.use(bodyParser.json());


// DB Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pine_hospital'
  });
  
  db.connect(err => {
    if (err) {
      console.error('Database connection failed:', err);
      return;
    }
    console.log(`Connected to ${db.config.database} database`);
    
  });

  // Test Route   
app.get('/', (req, res) => {
  res.send('Server is running!');
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
