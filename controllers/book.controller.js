const data = require("../config/db");
const bookHeadDetails = (req, res) => {
  const bookById = parseInt(req.params.bookId, 10);
  const bookDetail = data.book.find((book) => book.id === bookById);
  res.json(bookDetail);
};

module.exports = {
  bookHeadDetails,
};
