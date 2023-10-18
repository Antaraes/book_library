const {
  getBookmarksByUserAndBook,
  getBookmarksByUser,
} = require("../services/bookmarkServices");

const getBookmarks = (req, res) => {
  const { bookId, userId } = req.params;
  if (bookId == null || userId == null) {
    res.json({ "Data-error": "Missing parameters!" });
  }
  const bookmarks = getBookmarksByUserAndBook(bookId, userId);
  if (!bookmarks) {
    res.json({ Error: "Data fetching error!" });
  }
  res.json(bookmarks);
};

const userBookmarks = (req, res) => {
  const { userId } = req.params;
  if (userId == null) {
    res.json({ "Data-error": "Missing parameters!" });
  }
  const bookmarks = getBookmarksByUser(userId);
  if (!bookmarks) {
    res.json({ Error: "Data fetching error!" });
  }
  res.json(bookmarks);
};

module.exports = {
  getBookmarks,
  userBookmarks,
};
