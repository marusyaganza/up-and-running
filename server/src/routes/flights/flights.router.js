const express = require("express");
const { getAllFlights, postFlight } = require("./flights.controller");

const flightsFouter = express.Router();

flightsFouter.get("/", getAllFlights);
flightsFouter.post("/", postFlight);

module.exports = flightsFouter;
