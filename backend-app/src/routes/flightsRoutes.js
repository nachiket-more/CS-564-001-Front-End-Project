const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define the route to get all flights
router.get('/all', async (req, res) => {
  try {
    const flightsCollection = mongoose.connection.collection('flights');

    const flights = await flightsCollection.find({}).toArray();

    res.json(flights);
  } catch (error) {
    console.error('Error fetching flights:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
