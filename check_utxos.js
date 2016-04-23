require('dotenv').config();

var Insight = require('bitcore-explorers').Insight;
var insight = new Insight(process.env.NET);

insight.getUnspentUtxos(process.env.SENDER_ADDRESS, function(err, utxos) {
  console.log(utxos);
});
