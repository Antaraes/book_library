const jsonData = require("../config/db");
const bookmarks = jsonData.bookmark;

function getBookmarksByUserAndBook(bookId, userId) {
  return bookmarks.filter((bookmark) => {
    return bookmark.bookId == bookId && bookmark.userId == userId;
  });
}

module.exports = {
  getBookmarksByUserAndBook,
};
