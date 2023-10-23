const { createClient } = require("@supabase/supabase-js");
const dotenv = require("dotenv");
dotenv.config();
const supabaseUrl = "https://mzesvrtnjyoqhqbwrxob.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
