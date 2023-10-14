const { getBookmarks } = require("../controllers/bookmarkController");
const express = require("express");
const route = express.Router();

route.get("/:bookId/:userId", getBookmarks);

module.exports = route;
