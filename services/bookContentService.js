const data = require("../config/db");
const zlib = require("zlib");

const getBookContentById = (bookId) => {
  const book = data.book.find((b) => b.id == bookId);

  if (!book) {
    return { error: "Cannot Find book" };
  }

  const content = data.bookContent.filter(
    (content) => content.bookId == bookId
  );

  if (content.length === 0) {
    return { error: "Cannot Find book content" };
  }

  const compressedContent = content.map((entry) => ({
    id: entry.id,
    bookId: entry.bookId,
    content: zlib.deflateSync(JSON.stringify(entry.content)).toString("base64"),
    page_no: entry.page_no,
  }));
  const bookInfoDetail = {
    book: book,
    contents: compressedContent,
  };

  return bookInfoDetail;
};

module.exports = {
  getBookContentById,
};
