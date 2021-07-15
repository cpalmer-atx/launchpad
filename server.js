const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// MongoDB connection
// *** UNCOMMENT ONCE DB CONFIGURED ***
// connectDB();

const users = require('./routes/users');

app.use(express.json());

app.use('/api/users', users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));