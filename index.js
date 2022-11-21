const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");

// internal
const { serverDetails } = require("./constants/constants");
const productsV1 = require("./routers/products.router.v1");
const productsV2 = require("./routers/products.router.v2");
const logger = require("./middlewares/logger.middleware");
const routeNotFound = require("./middlewares/routeNotFound.middleware");

const app = express();
const port = process.env.PORT;

// view engine
app.set("view engine", "ejs");

// middlewares
app.use(cors());
app.use("/assets", express.static(__dirname + "/public"));
app.use(bodyParser.json());

// home route
app.get("/", (req, res) => {
  res.render("index", {
    name: "Ankur",
    data: serverDetails,
  });
});

// other routes
app.use("/v1/products", logger, productsV1);
app.use("/v2/products", logger, productsV2);

// error handling routes
app.use(routeNotFound);

app.listen(port, () => {
  console.log(`CORS-enabled web server listening on port ${port}`);
});
