const removeFromArray = function(array)  {
  let argNum = arguments.length;

  for (let i = 1; i <= argNum - 1; i++) {
    array = removeOne(array, arguments[i]);
  }

  return array;
};

function removeOne(array, removeMe) {
  const index = array.indexOf(removeMe);
  if (removeMe === '' || index === -1) {
    return array;
  } else if (index >= 0) {
    array.splice(index, 1);
    return array;
  }
}

// Do not edit below this line
module.exports = removeFromArray;
