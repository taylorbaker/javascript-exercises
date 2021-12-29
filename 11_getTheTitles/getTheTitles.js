const getTheTitles = function(list) {
  let books = [];

  for (let i = 0; i < list.length; i++) {
    books.push(list[i].title);
  }

  return books;
};

// Do not edit below this line
module.exports = getTheTitles;
