const ftoc = function(tempf) {
  let tempc = (tempf - 32) * (5 / 9);
  // ...*10 / 10 to return founded to tens place
  let roundedTemp = Math.round(tempc * 10) / 10;
  return roundedTemp; 
};

const ctof = function(tempc) {
  let tempf = 1.8 * tempc + 32;
  let roundedTemp = Math.round(tempf * 10) / 10;
  return roundedTemp; 
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
