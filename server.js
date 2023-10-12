import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.listen(PORT, (req, res) => {
  console.log("Server listening on", PORT);
});

app.get("/", (req, res) => {
  res.json("hi");
});
