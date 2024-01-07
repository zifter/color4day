const express = require('express');

const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.get('/api/about', (req, res) => {
  res.send('{"version": "test"}');
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
  console.log('Closing http server.');
  server.close(() => {
    console.log('Http server closed.');
  });
});
process.on('SIGINT', () => {
  console.log('Received SIGINT. ');
  console.log('Closing http server.');
  server.close(() => {
    console.log('Http server closed.');
  });
});