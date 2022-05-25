const express = require('express');
const app = express();
const port = 3067;
const data = require('./data.json');
const cors = require('cors');
app.use(cors());

app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.get('/', (req, res) => {
  res.send('default backend');
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
