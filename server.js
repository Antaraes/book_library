import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routers/index.js";
dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", router);
app.listen(PORT, () => {
  console.log("Server listening on", PORT);
});

/* 
  /booksList 
  / books / 1 
  / bookmark /1
  / user / 1 
  /wishlist/ 
*/