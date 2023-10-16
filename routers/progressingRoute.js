const express = require("express");
const route = express.Router();
const { getProgressingBooks } = require("../controllers/progressing.controller");

route.get("/:id", getProgressingBooks);

module.exports = route;
