const express = require("express");
const route = express.Router();
const controller = require("../controllers/book.controller");
route.get("/:bookId", controller.bookContentDetailById);

module.exports = route;
