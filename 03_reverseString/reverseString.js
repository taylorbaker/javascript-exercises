const reverseString = function(str) {
  let len = str.length;
  let reverseArray = [];

  const defaultArray = str.split('');
  for (let i = len - 1; i >= 0; i--) {
    reverseArray.push(defaultArray[i]);
  }
  
  let reverseStr = reverseArray.join('');
  return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
