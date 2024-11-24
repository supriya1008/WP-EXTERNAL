const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// Import routes
const userRoutes = require('./routes/userRoutes');
// Initialize express app
const app = express();
// Middleware to parse request body
app.use(bodyParser.json());
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/usersDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));
// Routes
app.use('/api/users', userRoutes);
// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
