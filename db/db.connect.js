const mongoose = require("mongoose");

const handleError = () => {
  console.error("Failed to connect to DB!");
};

const initializeDbConnection = async () => {
  const { MONGO_DB_USERNAME, MONGO_DB_PASSWORD, MONGO_DB_HOST } = process.env;

  try {
    await mongoose.connect(
      `mongodb+srv://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@${MONGO_DB_HOST}/?retryWrites=true&w=majority`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log("Successfully connected to DB!");
  } catch (error) {
    handleError(error);
  }
};

module.exports = { initializeDbConnection };
