const bookContentService = require("../services/bookContentService");

const getBookContentByBookIDAndContentId = (req, res) => {
  const { bookId } = req.params;
  const data = bookContentService.getBookContentById(bookId);

  if (data.error) {
    res.status(404).json({ error: data.error });
    return;
  }
  res.status(200).json(data);
};

module.exports = {
  getBookContentByBookIDAndContentId,
};
