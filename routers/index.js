const express = require("express");
const router = express.Router();
const bookListRoute = require('./bookListRouters'); 
const authorController = require("../controllers/authorController");
const categoriesController = require("../controllers/categoriesController");

router.get('/authors',authorController.getAuthor);
router.get('/categories',categoriesController.getCategories);
router.use('/booksList',bookListRoute);

module.exports = router;