const express = require("express");
const { body } = require("express-validator");

const { getAllFlights, postFlight } = require("./flights.controller");

const flightsFouter = express.Router();

flightsFouter.get("/", getAllFlights);
flightsFouter.post(
  "/",
  body("destination").notEmpty().withMessage("destination is required"),
  body("origin").notEmpty().withMessage("origin is required"),
  body("starship").notEmpty().withMessage("starship is required"),
  body("date").notEmpty().withMessage("data is required"),
  postFlight
);

module.exports = flightsFouter;
