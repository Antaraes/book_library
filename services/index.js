const dataPromise = require("./FileReader.service");
let myData;
dataPromise
  .then((data) => {
    myData = data.book;
  })
  .catch((err) => {
    console.error(err);
  });

console.log(myData);
