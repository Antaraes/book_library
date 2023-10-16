const data = require("../config/db");

exports.getLogoutUser = (req, res) => {
  const userId = req.params.userId;
  res.clearCookie("user");
  res.json({ message: "Logout successful" });
};

exports.postLoginUser = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const authenticatedUser = data.user.find(
    (user) => user.username === username && user.password === password
  );

  if (authenticatedUser) {
    try {
      res.cookie("user", authenticatedUser, { secure: true });
      res.json({ message: "login successful", user: authenticatedUser });
    } catch (err) {
      res.json("Error setting cookie: " + err.message);
    }
  } else {
    res.json("Login Failed");
  }
};
