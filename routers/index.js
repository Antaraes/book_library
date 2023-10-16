const express = require("express");
const bookListRoute = require("./bookListRouters");
const authorController = require("../controllers/author.controller");
const categoriesController = require("../controllers/categories.controller");
const progressingBooksRoute = require("../routers/progressingRoute");
const bookRoutes = require("./bookRoute");
const authRoutes = require("./loginRouter");
const router = express.Router();
const bookmarkRoutes = require("../routers/bookmarkRoutes");
const { authenticatedUser } = require("../middleware/auth.middleware");

router.get("/authors", authorController.getAuthor);
router.get("/categories", categoriesController.getCategories);
router.use("/booksList", bookListRoute);
router.use("/book", authenticatedUser, bookRoutes);
router.use("/auth", authRoutes);
router.use("/bookmark", authenticatedUser, bookmarkRoutes);

router.use("/progressingBook", authenticatedUser, progressingBooksRoute);

module.exports = router;
