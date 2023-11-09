const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define the route to get all airlines

router.get('/all', async (req, res) => {
    try {
      const collection = mongoose.connection.collection('airlines');
  
      const airlines = await collection.find({}).toArray();
  
      res.json(airlines);
    } catch (error) {
      console.error('Error fetching airlines:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;
