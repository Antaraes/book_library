function authenticatedUser(req, res, next) {
  const userCookie = req.cookies.user;

  // if (!userCookie) {
  //   return res.status(401).json({ message: "Unauthorized: Please log in" });
  // }

  next();
}

module.exports = { authenticatedUser };
