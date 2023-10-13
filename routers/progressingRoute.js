const express = require("express");
const route = express.Router();
const { getProgressingBooks } = require("../controllers/progressingController");

route.get("/:id", getProgressingBooks);

module.exports = route;
