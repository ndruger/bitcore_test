require('dotenv').config();

var bitcore = require('bitcore');
var Insight = require('bitcore-explorers').Insight;
var insight = new Insight(process.env.NET);

function getUtxo(address, done) {
  insight.getUnspentUtxos(address, function(err, utxos) {
    if (err) {
      console.error(err);
      throw '';
    }
    done(utxos);
  });
}

function broadcast(tx, done) {
  insight.broadcast(tx, function(err, id) {
    if (err) {
      console.error(err);
      throw '';
    }
    done(id);
  });
}

function send(from, to, utxos) {
  var transaction = new bitcore.Transaction()
    .fee(100000)
    .from(utxos)
    .addData(process.argv[2])
    .change(from)
    .sign(process.env.SENDER_KEY)

  broadcast(transaction, function(id) {
    console.log(id);
　});
}

console.log(process.argv[2]);

getUtxo(process.env.SENDER_ADDRESS, function(utxos) {
  send(process.env.SENDER_ADDRESS, process.env.SENDER_ADDRESS, utxos);
});
