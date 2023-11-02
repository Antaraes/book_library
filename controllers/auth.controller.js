const data = require("../config/db");
const supabase = require("../config/supabase");
exports.getLogoutUser = async (req, res) => {
  const userId = req.params.userId;
  const { error } = await supabase.auth.signOut();

  if (!error) {
    res.json({ message: "Logout successful" });
  }
  res.json({ message: error });
};

exports.loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (data) {
    res.cookie("user", data.session.access_token, { secure: true });
    res.json({ message: "login successful", data: data });
    return;
  } else {
    res.json({ message: error });
  }
};
exports.registerUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const { user, session, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  try {
    res.cookie("user", user, { secure: true });
    res.json({ message: "Account successfully created", user: user, session: session });
  } catch (err) {
    res.json("Error setting cookie: " + error);
  }
};
