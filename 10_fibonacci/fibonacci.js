function fibonacci(input) {
  let num = parseInt(input, 10);

  if (num < 1) {
    return 'OOPS';
  } else if (num === 1|| num === 2) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

// Do not edit below this line
module.exports = fibonacci;
