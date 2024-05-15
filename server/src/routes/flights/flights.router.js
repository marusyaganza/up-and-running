const express = require("express");
const { body } = require("express-validator");

const {
  httpGetAllFlights,
  httpPostFlight,
  httpCancelFlight,
  httpUpdateFlight,
} = require("./flights.controller");

const flightsFouter = express.Router();

flightsFouter.get("/", httpGetAllFlights);

flightsFouter.post(
  "/",
  body("destination").notEmpty().withMessage("destination is required"),
  body("origin").notEmpty().withMessage("origin is required"),
  body("starship").notEmpty().withMessage("starship is required"),
  body("date").notEmpty().withMessage("data is required"),
  httpPostFlight
);

flightsFouter.patch("/:id", httpUpdateFlight);

flightsFouter.delete("/:id", httpCancelFlight);

module.exports = flightsFouter;
