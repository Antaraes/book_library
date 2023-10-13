const express = require("express");
const FileReader = require("../services/FileReader.service");

const route = express.Router();
async function getData() {
  return await FileReader();
}
const myData = getData().then((response) => {
  if (response) {
    return response.body;
  }
});
console.log(myData);
getData();
// dataPromise
//   .then((data) => {
//     myData = data.book;

//     route.get("/bookList", (req, res, next) => {
//       res.json(myData);
//     });
//   })
//   .catch((err) => {
//     console.error(err);
//   });

module.exports = route;
