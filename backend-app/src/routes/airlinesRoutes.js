const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define the route to get all airlines
router.get('/all', async (req, res) => {
  try {
    const airlineCollection = mongoose.connection.collection('airlines');

    const airlines = await airlineCollection.find({}).toArray();

    res.json(airlines);
  } catch (error) {
    console.error('Error fetching airlines:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
