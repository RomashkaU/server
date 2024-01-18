const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the build folder
app.use(express.static(path.resolve(__dirname, '../../client/ave-trans/dist')));

// Define a route that always serves your index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/ave-trans/dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
