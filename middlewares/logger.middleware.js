const logger = (req, res, next) => {
  console.log("Time:", Date.now());
  next();
};

module.exports = logger;
