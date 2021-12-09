const repeatString = function(phrase, mult) {
  let finalPhrase = '';
  if (mult < 0) {
    return 'ERROR';
  } else {
    for (let i = 0; i < mult; i++) {
      finalPhrase += phrase;
    }
  }
  return finalPhrase;
};

// Do not edit below this line
module.exports = repeatString;
