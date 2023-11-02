const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const router = require("./routers/index.js");
const supabase = require("./config/supabase.js");
const cookieParser = require("cookie-parser");
dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});

app.use("/api/v1", router);

// const dataInsert = async () => {
//   const datas = [
//     {
//       bookId: 1,
//       authId: 2,
//       cateId: 1,
//     },
//     {
//       bookId: 2,
//       authId: 2,
//       cateId: 1,
//     },

//     {
//       bookId: 3,
//       authId: 3,
//       cateId: 3,
//     },
//   ];
//   const { data, error } = await supabase.from("BookList").insert(datas);
// };
// dataInsert();

app.listen(PORT, async () => {
  console.log("Server listening on", PORT);
});

/* 
  /booksList 
  / books / 1 
  / bookmark /1
  / user / 1 
  /wishlist/ 
*/
