const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((acc, number) => acc + number, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, number) => acc * number, 1);
};

const power = function (a, b) {
  let total = 1;
  for (let i = 0; i < b; i++) {
    total *= a;
  }
  return total;
};

const factorial = function (a) {
  let factorial = 1;
  for (let i = a; a >= 1; i--) {
    factorial *= i;
  }
  return factorial
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
