const logger = (req, res, next) => {
  res.status(404).json({ message: "route not found" });
  next();
};

module.exports = logger;
