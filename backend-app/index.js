// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const airlinesRoutes = require('./src/routes/airlinesRoutes');
const airportsRoutes = require('./src/routes/airportsRoutes');
const flightsRoutes = require('./src/routes/flightsRoutes');
const authenticateToken = require('./src/authMiddleware'); // Add this line

// Load environment variables from .env
dotenv.config();

const app = express();
app.use(cors());
app.options('*', cors());

const mongoURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.liwdhud.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('\nConnected to MongoDB');
  })
  .catch((error) => {
    console.error('\nError connecting to MongoDB:', error);
  });

app.use(bodyParser.json());


// Use the authentication middleware for all routes

app.use(authenticateToken);

// Use the airlinesRoute as middleware
app.use('/airlines', airlinesRoutes);
app.use('/airports', airportsRoutes);
app.use('/flights', flightsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\nServer is running on port ${PORT}`);
});
