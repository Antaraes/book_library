const {
  fetchProgressingBookByUserId,
} = require("../services/progressingService");

const getProgressingBooks = (req, res) => {
  res.json(fetchProgressingBookByUserId(2));
};

module.exports = {
  getProgressingBooks,
};
