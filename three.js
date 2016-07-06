var first = require('./one.js');
var second = require('./two.js');

module.exports.finalNumber = function() {
  console.log(second(first(100, 1000000)));
}

module.exports.balance = function() {
 console.log('Account balance:');
}
