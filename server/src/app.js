const express = require("express");
const path = require("path");
const { ROUTES } = require("./routes");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const FE_URL = process.env.FE_URL;

const staticPath = path.join(__dirname, "..", "..", "client", "dist");

const app = express();
app.use(express.json());
app.use(morgan("common"));
app.use(helmet());
app.use(cors({ origin: FE_URL }));
app.use("/", express.static(staticPath));

const routes = Object.keys(ROUTES);
routes.forEach((route) => {
  app.use(ROUTES[route].url, ROUTES[route].router);
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

module.exports = app;
