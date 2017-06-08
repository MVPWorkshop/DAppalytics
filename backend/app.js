const express = require('express'),
  Web3 = require('web3'),
  https = require('https'),
  app = express();

let web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));

app.get('/', function (req, res) {
  getAccountTransactions('0x19076Bd01E86fA3D76334e27D4b8E6789688A42d', 0, [], function(transactions) {
    console.log(transactions.length);

    res.send('');
  });
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});

function getAccountTransactions(address, offset, result, callback) {
  var maxResponseLength = 50;

  var options = {
    host: 'etherchain.org',
    port: 443,
    path: '/api/account/' + address + '/tx/' + offset
  };

  var req = https.request(options, function (response) {
    var responseString = '';

    response.on('data', function (chunk) {
      responseString += chunk;
    });

    response.on('end', function () {
      var responseData = JSON.parse(responseString);

      result = result.concat(responseData.data);

      if(responseData.data.length == maxResponseLength) {
        result = result.concat(getAccountTransactions(address, offset + maxResponseLength, result, callback));
      } else {
        callback(result);
      }
    });
  });

  req.end();
}