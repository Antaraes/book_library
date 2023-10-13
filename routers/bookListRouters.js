const express = require ('express');
const bookListRouter = express.Router();
const apiBookList = require('../controllers/bookList.controller')

bookListRouter.get('/',apiBookList.getAllBooks)

module.exports=bookListRouter;