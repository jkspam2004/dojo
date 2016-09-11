
// create mathlib module with add, multiply, square, and random functions
module.exports = function() {
  return {
    add: function(num1, num2) {
      console.log(num1 + num2);
    },
    multiply: function(num1, num2) {
      console.log(num1 * num2);
    },
    square: function(num1) {
      console.log(num1 * num1);
    },
    random: function(min, max) {
      console.log(Math.floor(Math.random()*(max - min + 1) + min));
    },
  }
}
