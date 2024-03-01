const express = require('express');

const app = express();

// API endpoint to get current Unix time
app.get('/api/unix-time', (req, res) => {
  const currentDateTime = new Date();
  
  const unixTime = Math.floor(currentDateTime.getTime() / 1000);
  
  const year = currentDateTime.getFullYear();
  const month = String(currentDateTime.getMonth() + 1).padStart(2, '0');
  const day = String(currentDateTime.getDate()).padStart(2, '0');
  const hours = String(currentDateTime.getHours()).padStart(2, '0');
  const minutes = String(currentDateTime.getMinutes()).padStart(2, '0');
  const seconds = String(currentDateTime.getSeconds()).padStart(2, '0');
  
  const response = {
    year,
    month,
    day,
    hours,
    minutes,
    seconds
  };
  
  res.json(response);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
