const express = require("express");
const { planetsRouter, starshipsRouter, flightsFouter } = require("./routes");

const app = express();
app.use(express.json());
app.use("/planets", planetsRouter);
app.use("/starships", starshipsRouter);
app.use("/flights", flightsFouter);

module.exports = app;
