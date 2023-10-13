const fs = require("fs/promises");

const FileReader = async () => {
  try {
    const jsonString = await fs.readFile("./utils/data.json", "utf8");
    const mainData = JSON.parse(jsonString);
    return mainData;
  } catch (err) {
    console.error("Error reading or parsing the file", err);
    throw err;
  }
};
// // const data = FileReader();

module.exports = FileReader;
