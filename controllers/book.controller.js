const bookContentService = require("../services/bookContentService");
const bookContentDetailById = (req, res) => {
  // const bookById = parseInt(req.params.bookId, 10);
  const data = bookContentService.getBookContentById(req, res);
  console.log(data);
  res.json(data);
};

module.exports = {
  bookContentDetailById,
};
