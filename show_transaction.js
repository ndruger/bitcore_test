var request = require('superagent-bluebird-promise');

request.get( "https://chain.so/api/v2/get_tx_outputs/BTCTEST/" + process.argv[2])
  .then(function(res) {
    console.log(JSON.stringify(res.body, 2, ' '));
  });
