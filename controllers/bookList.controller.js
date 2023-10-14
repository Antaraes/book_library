const { booksList, book, author, categories } = require("../config/db");
const bookListService = require('../services/booksListService')
const getAllBooks = (req, res) => {
  const booksDetails = bookListService.booksWithDetails; 
  res.json(booksDetails);
};

module.exports = {
  getAllBooks,
};
