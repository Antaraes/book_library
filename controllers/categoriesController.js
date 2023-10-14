const { categories } = require("../config/db");
const getCategories = (req, res) => {
  res.json(categories);
};

module.exports = {
  getCategories,
};
