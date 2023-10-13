const data = require("../config/db");

const getBookContentById = (req, res) => {
  const { bookId } = req.params;
  console.log("bookId------" + bookId);

  const book = data.book.find((b) => b.id == bookId);

  if (!book) {
    res.status(404).json({ error: "Book not found" });
    return;
  }

  const content = data.bookContent.filter(
    (content) => content.bookId == bookId
  );

  if (!content) {
    res.status(404).json({ error: "Book content not found" });
    return;
  }
  return res.status(200).json(content);
};

module.exports = {
  getBookContentById,
};
