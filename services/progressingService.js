const { progressingBook } = require("../config/db");

function fetchProgressingBookByUserId(id) {
  const books = progressingBook.filter((book) => book.userId === Number(id));
  return books ? books : [];
}

module.exports = {
  fetchProgressingBookByUserId,
};
