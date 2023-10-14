const express = require("express");
const progressingBooksRoute = require("../routers/progressingRoute");
const bookRoutes = require("./bookRoute");
const router = express.Router();
const bookmarkRoutes = require("../routers/bookmarkRoutes");

router.use("/book", bookRoutes);

router.use("/bookmark", bookmarkRoutes);

router.use("/progressingBook", progressingBooksRoute);

module.exports = router;
