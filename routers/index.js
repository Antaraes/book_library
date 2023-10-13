const express = require("express");
const data = require("../config/db");
const bookRoute = require("./bookRoute");
const router = express.Router();

router.use("/book", bookRoute);
module.exports = router;
