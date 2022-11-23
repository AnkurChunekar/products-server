const authenticator = (req, res, next) => {
  const token = req.headers.authorization;
  if (token === "abcdefghi") {
    next();
    return;
  }
  res.status(401).json({ message: "401 Unauthorized access" });
};

module.exports = authenticator;
