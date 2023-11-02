// const { author } = require("../config/db");
const supabase = require("../config/supabase.js");
const getAuthor = async (req, res) => {
  let { data: Author, error } = await supabase.from("Author").select();

  res.json(Author);
};

module.exports = {
  getAuthor,
};
