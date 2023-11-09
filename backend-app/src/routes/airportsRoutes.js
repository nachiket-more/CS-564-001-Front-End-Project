const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define the route to get all airports

router.get('/all', async (req, res) => {
    try {
      const collection = mongoose.connection.collection('airports');
  
      const airports = await collection.find({}).toArray();
  
      res.json(airports);
    } catch (error) {
      console.error('Error fetching airports:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;
