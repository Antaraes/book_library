const express = require("express");
const bookRoutes = require("./bookRoute");
const router = express.Router();

router.use("/book", bookRoutes);

module.exports = router;
