const bookContentService = require("../services/bookContentService");

const getBookContentByBookIDAndContentId = (req, res) => {
  const { bookId, currentPage, contentId } = req.params;
  const data = bookContentService.getBookContentById(
    bookId,
    currentPage,
    contentId
  );

  if (data.error) {
    res.status(404).json({ error: data.error });
    return;
  }
  res.status(200).json(data);
};

module.exports = {
  getBookContentByBookIDAndContentId,
};
