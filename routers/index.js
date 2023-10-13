const express = require("express");
const data = require("../config/db");
const router = express.Router();

router.use("/book", (req, res, next) => {
  res.json(data);
});

module.exports = router;
