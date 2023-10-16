const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const loginRoute = require("./routers/loginRouter.js");

dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", loginRoute);

app.listen(PORT, function () {
  console.log("Server listening on", PORT);
});

/* 
  /booksList 
  / books / 1 
  / bookmark /1
  / user / 1 
  /wishlist/ 
*/
