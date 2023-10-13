import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routers/index.js";
const loginRoute = require("./routers/loginRoute.js");
dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/api/v1", router);
app.use("/api/v1", loginRoute);
app.listen(PORT, () => {
  console.log("Server listening on", PORT);
});
