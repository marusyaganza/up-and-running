const express = require("express");
const { ROUTES } = require("./routes");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const FE_URL = process.env.FE_URL;

const app = express();
app.use(express.json());
app.use(morgan("common"));
app.use(helmet());
app.use(cors({ origin: FE_URL }));

const routes = Object.keys(ROUTES);

routes.forEach((route) => {
  app.use(ROUTES[route].url, ROUTES[route].router);
});

module.exports = app;
