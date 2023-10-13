const express = require("express");
const bookRoutes = require("./bookRoutes");
const router = express.Router();

router.use("/book", bookRoutes);

module.exports = router;
