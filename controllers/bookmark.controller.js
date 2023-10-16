const { getBookmarksByUserAndBook } = require("../services/bookmarkServices");

const getBookmarks = (req, res) => {
  const { bookId, userId } = req.params;
  console.log(bookId, userId);
  if (bookId == null || userId == null) {
    console.log("missing");
    res.json({ "Data-error": "Missing parameters!" });
  }
  const bookmarks = getBookmarksByUserAndBook(bookId, userId);
  console.log(bookmarks);
  if (!bookmarks) {
    res.json({ Error: "Data fetching error!" });
  }
  res.json(bookmarks);
};

module.exports = {
  getBookmarks,
};
