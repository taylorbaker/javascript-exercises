const sumAll = function(a, b) {
  let sum = 0;
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  if (a < 0 || b < 0 || typeof a !== 'number' || typeof b !== 'number') {
    return 'ERROR';
  }

  for (i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
