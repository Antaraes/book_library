const express = require("express");
const bookContentController = require("../controllers/book.controller");
const router = express.Router();

router.get(
  "/:bookId/:currentPage/:contentId",
  bookContentController.getBookContentByBookIDAndContentId
);
router.get(
  "/:bookId/:currentPage",
  bookContentController.getBookContentByBookIDAndContentId
);
module.exports = router;
