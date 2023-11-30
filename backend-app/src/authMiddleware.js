const authenticateToken = (req, res, next) => {
    const apiKey = req.header('API-Key');

    // Check if the provided key matches the expected key
    if (apiKey === process.env.API_KEY) {
      next(); // Allow access to the route
    } else {
      res.status(403).json({ error: 'Access denied' });
    }
  };
  

module.exports = authenticateToken;
