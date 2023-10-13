const bookContentService = require("../services/bookContentService");

const getBookContentByBookIDAndContentId = (req, res) => {
  const data = bookContentService.getBookContentById(req, res);
  console.log("controller running");
  console.log(data);
};

module.exports = {
  getBookContentByBookIDAndContentId,
};
