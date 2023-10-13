import express from "express";
import bookListRouter from './bookListRouters'; 
const router = express.Router();

router.get("/", (req, res) => {
  res.json("Run from main route");
});

export default router;
