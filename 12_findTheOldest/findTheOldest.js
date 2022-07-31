function findTheOldest(input) {
  let today = new Date();
  let currentYear = today.getFullYear(); // need to create Date() obj before calling getFullYear() method

  const oldest = input.reduce((obj, item) => {

      function findAge(person) {
          if (!person.yearOfDeath) {
              person.yearOfDeath = currentYear;
          }
          return person.yearOfDeath - person.yearOfBirth;
      }
      
      return findAge(obj) > findAge(item) ? obj : item;
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
