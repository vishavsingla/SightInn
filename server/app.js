const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    console.log('sdfg')
  res.send('Hello World! This is the root route.');
});

// Test route
app.get('/test', (req, res) => {
    console.log('test');
  res.send('Hello World! This is the test route.');
});

// Start the server
const PORT = process.env.PORT || 8080; // Use the specified port or 8080 as the default
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
