const express = require('express');
const app = express();
app.use((req, res, next) => {
  req.setTimeout(10000, () => {
    console.error('Request timed out');
    res.status(504).send('Request timed out');
  });
  next();
});
app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello!');
  }, 5000); // Simulate a long-running task
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});