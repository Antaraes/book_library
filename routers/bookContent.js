const express = require("express");
const bookContentController = require("../controllers/bookContentController");
const router = express.Router();

router.get(
  "/content/:bookId",
  bookContentController.getBookContentByBookIDAndContentId
);

module.exports = router;
