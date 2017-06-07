const express = require('express'),
      Web3 = require('web3'),
      app = express();

let web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});