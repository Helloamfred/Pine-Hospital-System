// server.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
// const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');


dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


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



  const path = require('path');

  // Serve frontend from public directory
  app.use(express.static(path.join(__dirname, 'frontend')));

  // Fetch users Route 
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'login.html'));
  });


  app.post('/login', (req, res) => {
    const { login_email, pass_us } = req.body;
    console.log('Login attempt:', login_email);
  
    const query = 'SELECT * FROM users WHERE email = ? AND  password = ?';
  
    db.query(query, [login_email, pass_us], (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Database error' });
      }
  
      if (results.length === 0) {
        console.log('No user found for:', login_email);
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      const user = results[0];
  
    //   bcrypt.compare(pass_us, user.password, (err, match) => {
    //     if (err || !match) {
    //       console.log('Password mismatch');
    //       return res.status(401).json({ message: 'Invalid email or password' });
    //     }
  
        console.log('Login successful for:', user.email); // ✅ fixed
  
        return res.status(200).json({
          message: 'Login successful',
          user: {
            id: user.id,
            name: user.name,
            email: user.email, // ✅ fixed
          },
        });
      });
    });
  
  
  
 

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
