const { author } = require("../config/db");
const getAuthor = (req, res) => {
  res.json(author);
};

module.exports = {
  getAuthor,
};
