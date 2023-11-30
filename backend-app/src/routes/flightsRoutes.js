const express = require("express");
const router = express.Router();
const authenticateToken = require('../authMiddleware');
const mongoose = require("mongoose");

// Define the route to get all flights

router.get("/all", authenticateToken, async (req, res) => {
  try {
    const collection = mongoose.connection.collection("flights");

    const flights = await collection.find({}).toArray();

    res.json(flights);
  } catch (error) {
    console.error("Error fetching flights:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
