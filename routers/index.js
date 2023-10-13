const express = require("express");
const bookRoutes = require("./bookRoute");
const router = express.Router();
const bookmarkRoutes = require("../routers/bookmarkRoutes");

router.use("/book", bookRoutes);

router.use("/bookmark", bookmarkRoutes);

module.exports = router;
