// var x = getRandomInt(100, 1000001);

module.exports.getRandomInt = getRandomInt(100, 1000001);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
