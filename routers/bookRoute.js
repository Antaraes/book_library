const express = require("express");
const bookContentController = require("../controllers/bookController");
const router = express.Router();

router.get(
  "/:bookId",
  bookContentController.getBookContentByBookIDAndContentId
);

module.exports = router;
