const express = require("express");
const bookContentController = require("../controllers/book.controller");
const router = express.Router();

router.get("/:bookId", bookContentController.getBookContentByBookIDAndContentId);

module.exports = router;
