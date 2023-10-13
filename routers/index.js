const express = require("express");
const data = require("../config/db");
const router = express.Router();
const bookmarkRoutes = require("../routers/bookmarkRoutes");

router.use("/book", (req, res, next) => {
  res.json(data);
});

router.use("/bookmark", bookmarkRoutes);

module.exports = router;
