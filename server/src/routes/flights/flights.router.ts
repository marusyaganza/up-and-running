import { Router } from "express";
import { body } from "express-validator";

import {
  httpGetAllFlights,
  httpPostFlight,
  httpCancelFlight,
  httpUpdateFlight,
  httpGetPastFlights,
  httpGetUpcomingFlights,
} from "./flights.controller";

const flightsFouter = Router();

flightsFouter.get("/", httpGetAllFlights);
flightsFouter.get("/upcoming", httpGetUpcomingFlights);
flightsFouter.get("/history", httpGetPastFlights);

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

export default flightsFouter;
