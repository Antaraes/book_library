const {
  getBookmarks,
  userBookmarks,
} = require("../controllers/bookmark.controller");
const express = require("express");
const route = express.Router();

route.get("/:bookId/:userId", getBookmarks);
route.get("/:userId", userBookmarks);

module.exports = route;
