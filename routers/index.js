const express = require("express");

const bookRoutes = require("./bookDetail");
const router = express.Router();

router.use("/book", bookRoutes);

module.exports = router;
