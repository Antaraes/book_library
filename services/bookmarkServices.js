const jsonData = require("../config/db");
const books = jsonData.book;
const bookmarks = jsonData.bookmark;
const bookContents = jsonData.bookContent;

function getBookmarksByUserAndBook(bookId, userId) {
  const result = [];
  const bookmark = bookmarks.filter(
    (bookmark) =>
      bookmark.bookId === Number(bookId) && bookmark.userId === Number(userId)
  );

  if (bookmark.length > 0) {
    const book = books.find((book) => book.id === bookmark[0].bookId);
    const bookContent = bookmark.map((data) => {
      return {
        id: data.id,
        page_no: data.book_content_page_no,
      };
    });

    result.push({
      bookId: book.id,
      bookTitle: book.title,
      bookmarkPages: bookContent,
    });
  }
  return result;
}

function getBookmarksByUser(userId) {
  const result = [];
  const bookmark = bookmarks.filter(
    (bookmark) => bookmark.userId === Number(userId)
  );

  const groupedBookmarks = {};

  bookmark.forEach((data) => {
    const book = books.find((book) => book.id === data.bookId);
    const bookContent = bookContents.filter(
      (bookContent) =>
        bookContent.page_no === data.book_content_page_no &&
        bookContent.bookId === data.bookId
    );
    const bookmarkData = {
      id: data.id,
      bookId: book.id,
      bookTitle: book.title,
      bookmarkPages: bookContent,
    };

    if (groupedBookmarks[book.id]) {
      groupedBookmarks[book.id].bookmarkPages.push(...bookContent);
    } else {
      groupedBookmarks[book.id] = {
        id: data.id,
        bookId: book.id,
        bookTitle: book.title,
        bookmarkPages: bookContent,
      };
    }
  });
  result.push(...Object.values(groupedBookmarks));
  return result;
}

module.exports = {
  getBookmarksByUserAndBook,
  getBookmarksByUser,
};