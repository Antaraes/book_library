const express = require("express");
const bookListRoute = require("./bookListRouters");
const authorController = require("../controllers/authorController");
const categoriesController = require("../controllers/categoriesController");
const progressingBooksRoute = require("../routers/progressingRoute");
const bookRoutes = require("./bookRoute");
const router = express.Router();
const bookmarkRoutes = require("../routers/bookmarkRoutes");

router.get("/authors", authorController.getAuthor);
router.get("/categories", categoriesController.getCategories);
router.use("/booksList", bookListRoute);

router.use("/book", bookRoutes);

router.use("/bookmark", bookmarkRoutes);

router.use("/progressingBook", progressingBooksRoute);

module.exports = router;
