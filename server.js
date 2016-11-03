const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
  res.send('You are now at root');
});

app.get('/home', (req, res) => {
  res.send('You are now at home');
});

app.listen(PORT, () => {
  console.log("Server listening at port " + PORT)
})