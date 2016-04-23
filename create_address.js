var bitcore = require('bitcore');
var privateKey = new bitcore.PrivateKey(process.env.NET);
var address = privateKey.toAddress();

console.log(address);
console.log(privateKey);
