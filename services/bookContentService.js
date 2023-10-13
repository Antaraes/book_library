const data = require("../config/db");

const getBookContentById = (req, res) => {
  const { bookId } = req.params;
  console.log("bookId------" + bookId);

  const book = data.book.find((b) => b.id == bookId);

  if (!book) {
    res.status(404).json({ error: "Book not found" });
    return;
  }

  const content = data.bookContent.filter((content) => content.bookId == bookId);
  const bookDetail = data.book.find((book) => book.id == bookId);

  if (!content && !bookDetail) {
    res.status(404).json({ error: "Book content not found" });
    return;
  }
  // const dataList = {
  //   content: content,
  //   bookDetail: bookDetail,
  // };
  // console.log();
  console.log(bookDetail);
  return bookDetail;
};

module.exports = {
  getBookContentById,
};
