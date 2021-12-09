const removeFromArray = function(array, remove1 = '', remove2 = '') {
  let argNum = arguments.length;

/*
  for (let i = 1; i < argNum - 1; i++) {
    array = removeOne(array, arguments[i]);
  }
 */

// works for 1 and 2 args
  array = removeOne(array, remove1);
  array = removeOne(array, remove2);

  return array;
};

function removeOne(array, removeMe) {
  const index = array.indexOf(removeMe);
  if (removeMe === '') {
    return array;
  } else if (index >= 0) {
    array.splice(index, 1);
    return array;
  }
}

// Do not edit below this line
module.exports = removeFromArray;
