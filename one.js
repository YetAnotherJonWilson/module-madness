// var x = getRandomInt(100, 1000001);

module.exports = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
