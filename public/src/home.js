function getTotalBooksCount(books) {
  let total = 0
    return books.reduce((books) => books + 1, total)
}

function getTotalAccountsCount(accounts) {
   return accounts.length;
}


function getBooksBorrowedCount(books) {
   let booksCheckedOut = books.filter(
  (book) =>
   book.borrows.filter((record) => record.returned === false).length > 0
 );
 return booksCheckedOut.length;
}

function sortAndSlice(arr) {
  let result = arr.sort((inputA, inputB) =>
  inputB.count - inputA.count).slice(0, 5)
  return result
}

// returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least
function getMostCommonGenres(books) {
  let map = [];
 books.forEach((num) => {
  if (map[num.genre]) {
   map[num.genre]++;
  } else {
   map[num.genre] = 1;
  }
 });
 return Object.entries(map)
  .map(([name, count]) => {
   return {
    name,
    count
   };
  })
 .sort((a, b) => b.count - a.count)
  .slice(0, 5);
}


//returns an array containing five objects or fewer that represents the most popular books in the library. Popularity is represented by the number of times a book has been borrowed.
function getMostPopularBooks(books) {
  let titleCount = [];
  books.forEach((book) => {
    const popularBooksArray = { name: book.title, count: book.borrows.length }
    titleCount.push(popularBooksArray) 
  })
  titleCount = sortAndSlice(titleCount) //helper function
  return titleCount
}

// Returns an array containing five objects or fewer that represents the most popular authors whose books have been checked out the most. Popularity is represented by finding all of the books written by the author and then adding up the number of times those books have been borrowed.
function getMostPopularAuthors(books, authors) {
   let result = [];
 authors.forEach((author) => {
  let theAuthor = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    theAuthor.count += book.borrows.length;
   }
  });
  result.push(theAuthor);
 });
 return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
