const {
  fetchProgressingBookByUserId,
} = require("../services/progressingService");

const getProgressingBooks = (req, res) => {
  const id = req.params.id;
  res.json(fetchProgressingBookByUserId(id));
};

module.exports = {
  getProgressingBooks,
};
