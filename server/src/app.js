const express = require("express");
const { ROUTES } = require("./routes");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();
app.use(express.json());
app.use(morgan("combined"));
app.use(helmet());

const routes = Object.keys(ROUTES);

routes.forEach((route) => {
  app.use(ROUTES[route].url, ROUTES[route].router);
});

module.exports = app;
