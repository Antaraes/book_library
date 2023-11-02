const { booksList, book, author, categories } = require("../config/db");
const supabase = require("../config/supabase.js");
const bookListService = require("../services/booksListService");
const getAllBooks = async (req, res) => {
  try {
    const booksDetails = await bookListService.booksWithDetails();
    res.json(booksDetails);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllBooks,
};
