// const { categories } = require("../config/db");
const supabase = require("../config/supabase.js");
const getCategories = async (req, res) => {
  const { data: Categories, error } = await supabase.from("Categories").select();

  res.json(Categories);
};

module.exports = {
  getCategories,
};
