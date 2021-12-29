function palindromes(str) {
  let stripped = stripStr(str); // 'normalize' input string by stripping to only letters
  return stripped == reverseStr(stripped);
};

function reverseStr(str) {
  let newStr = '';
  for (i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

// create a 'normalized' string (lower case, no punctuation or spaces) for comparison
function stripStr(str) {
  let stripped = '';
  for (i = 0; i < str.length; i++) {
    if (isLetter(str[i])) {
      stripped += str[i].toLowerCase(); // make stripped case agnostic
    }
  }
  return stripped;
}

// helper to determine if char is a letter
function isLetter(ch) {
  return ch.toUpperCase() != ch.toLowerCase(); // only returns true for [a-zA-Z]
}

// Do not edit below this line
module.exports = palindromes;
