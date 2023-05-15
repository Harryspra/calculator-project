const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the calculator page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'calci.html'));
});

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
