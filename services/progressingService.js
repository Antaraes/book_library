const { progressingBook } = require("../config/db");

function fetchProgressingBookByUserId(id) {
  console.log(id);
  return progressingBook.filter((book) => book.userId === id);
}

module.exports = {
  fetchProgressingBookByUserId,
};
