const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
