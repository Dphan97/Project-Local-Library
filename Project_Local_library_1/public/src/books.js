// The find() method is used to find author.id === id
function findAuthorById(authors, id) {
 let find = authors.find((author) => author.id === id);
 return find;
}

// The find() method is used to find book.id === id
function findBookById(books, id) {
 let foundBooks = books.find((book) => book.id === id);
 return foundBooks;
}

// Filter() method to filter the books that are currently checked out, while second filter finds book objects that represent the books that have been returned.

function partitionBooksByBorrowedStatus(books) {
 let booksReturned = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true)
 );
 let booksBorrowed = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
 );

 let finalArray = [[...booksBorrowed], [...booksReturned]];
 return finalArray;
}

// The map() method is used to loop through the borrows array.
// The find() method is used to loop through the accounts array.
// The slice() method is used to return up to the index value 10 of the array.
function getBorrowersForBook(book, accounts) {
 return book.borrows
  .map((borrow) => {
   let account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  })
  .slice(0, 10);
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
