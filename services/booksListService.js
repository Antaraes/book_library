const { booksList, book, author, categories } = require("../config/db");

const booksWithDetails = booksList.map((result) => {
    const bookDetails = book.find((book) => book.id === result.bookId);
    const authorDetails = author.find((author) => author.id === result.authId);
    const categoryDetails = categories.find((cate) => cate.id === result.cateId);

    return {
      book: bookDetails,
      author: authorDetails,
      categories: categoryDetails,
    };
  });


  module.exports = {
    booksWithDetails
  }