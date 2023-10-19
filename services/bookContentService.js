const data = require("../config/db");
const zlib = require("zlib");

const getBookContentById = (bookId, currentPage, contentId) => {
  const book = data.book.find((b) => b.id == bookId);
  if (!book) {
    return { error: "Cannot Find book" };
  }

  const content = data.bookContent.filter((content) => content.bookId == bookId);
  const bookDetail = data.book.find((book) => book.id == bookId);

  if (content.length == 0) {
    return { error: "Cannot Find book content" };
  }

  let currentPageIndex = -1;
  if (contentId) {
    const entryWithContentId = content.find((entry) => entry.id == contentId);
    if (!entryWithContentId) {
      return { error: "Content ID not found" };
    }
    currentPageIndex = content.indexOf(entryWithContentId);
  } else {
    currentPageIndex = content.findIndex((entry) => entry.page_no == currentPage);
  }

  if (currentPageIndex == -1) {
    return { error: "Current page not found" };
  }

  const pagesToShow = 8;
  const pagesBefore = 3;
  const pagesAfter = pagesToShow - pagesBefore - 1;

  const startPageIndex = Math.max(0, currentPageIndex - pagesBefore);
  const endPageIndex = Math.min(content.length - 1, currentPageIndex + pagesAfter);

  const contentInRange = content.slice(startPageIndex, endPageIndex + 1);

  const compressedContent = contentInRange.map((entry) => ({
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
