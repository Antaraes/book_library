const { getBookmarks } = require("../controllers/bookmark.controller");
const express = require("express");
const route = express.Router();

route.get("/:bookId/:userId", getBookmarks);

module.exports = route;
