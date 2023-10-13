const express = require("express");
const data = require("../config/db");
const progressingBooksRoute = require("../routers/progressingRoute");

const router = express.Router();

router.use("/book", (req, res, next) => {
  res.json(data);
});

router.use("/progressingBook", progressingBooksRoute);

module.exports = router;
