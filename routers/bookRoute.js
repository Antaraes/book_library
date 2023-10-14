const express = require("express");
const bookContentController = require("../controllers/bookController");
const router = express.Router();

// router.use("/:bookId", (req, res, next) => {
//   next("/:bookId/:contentId");
// });

router.get(
  "/:bookId/:currentPage/:contentId",
  bookContentController.getBookContentByBookIDAndContentId
);

router.get(
  "/:bookId/:currentPage",
  bookContentController.getBookContentByBookIDAndContentId
);
module.exports = router;
