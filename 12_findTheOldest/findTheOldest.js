function findTheOldest(input) {
  const ages = input.map(person => {
    let today = new Date();
    let currentYear = today.getFullYear(); // need to create Date() obj before calling getFullYear() method
    let term = person.yearOfDeath;

    // if living, use current year for age calc
    if (!person.hasOwnProperty('yearOfDeath')) { // if person has not died
      term = currentYear;
    }
  
    return term - person.yearOfBirth; // return age
  });

  const maxValue = Math.max(...ages);
  const maxIndex = ages.indexOf(maxValue);
	
  return input[maxIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
