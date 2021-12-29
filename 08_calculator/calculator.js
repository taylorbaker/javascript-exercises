const add = function(a, b) {
  return a + b;
};

const subtract = function(b, a) {
  return b - a;
};

const sum = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let prod = 1;
  for (let i = 0; i < array.length; i++) {
    prod *= array[i];
  }
  return prod;
};

const power = function(base, exp) {
  let prod = 1;
  for (let i = 0; i < exp; i++) {
    prod *= base;
  }
  return prod;
};

const factorial = function(num) {
  return ((num == 0) ? 1 : num * factorial(num - 1));
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
