var first = require('./one.js');
var second = require('./two.js');

// exports a USD formatted random number between the two arguments
module.exports.finalNumber = function() {
  console.log(second(first(100, 1000000)));
}

// exports a simple function to log 'Account Balance:'
module.exports.balance = function() {
 console.log('Account balance:');
}
