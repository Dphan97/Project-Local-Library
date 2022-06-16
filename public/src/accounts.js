function findAccountById(accounts, id) {
  let result = accounts.find((account) => account.id === id);
  return result;
}

// Sort() method to sort objects alphabetically.
function sortAccountsByLastName(accounts) {
 accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1));
  return accounts;
}


 function getTotalNumberOfBorrows(account, books) {
  const accId = account.id;
  let total = 0;
  books.forEach(book => book.borrows.forEach(borrow => accId === borrow.id && total++));
  return total;
}


  function getBooksPossessedByAccount(account, books, authors) {
    let books_taken = [];
  // Return an array of book objects, including author information, that represents all books _currently checked out_ by the given account. 
    books.forEach(book=>{
      if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
        books_taken.push(book);
      }
    })
    console.log(books_taken);
    books_taken.forEach(book=>{
      let anAuthor = authors.find(person => person.id === book.authorId);
      book['author'] = anAuthor;
    })
    console.log(books_taken);
    return books_taken;
  }


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
