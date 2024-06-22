import { Request, Response } from "express";
import {
  getFlights,
  scheduleFlight,
  cancelFlight,
  getPastFlights,
  getUpcomingFlights,
  updateFlight,
} from "../../models/flights/flights.model";

import { validationResult } from "express-validator";

export async function httpGetAllFlights(_: Request, res: Response) {
  const flights = await getFlights();
  return res.json(flights);
}

export async function httpGetUpcomingFlights(_: Request, res: Response) {
  const flights = await getUpcomingFlights();
  return res.json(flights);
}

export async function httpGetPastFlights(_: Request, res: Response) {
  const flights = await getPastFlights();
  return res.json(flights);
}

export async function httpPostFlight(req: Request, res: Response) {
  const input = req.body;
  const errors = validationResult(req)
    ?.array()
    ?.map((error) => error?.msg);
  if (!errors?.length) {
    const flight = await scheduleFlight(input);
    return res.status(201).json(flight);
  }
  return res.status(400).json({ errors });
}

export async function httpCancelFlight(req: Request, res: Response) {
  const id = req?.params?.id;
  const cancelledFlight = await cancelFlight(id);
  if (!cancelledFlight) {
    return res.status(404).json({ error: "flight is not found" });
  }
  return res.status(200).json(cancelledFlight);
}

export async function httpUpdateFlight(req: Request, res: Response) {
  const id = req?.params?.id;
  const update = req.body;
  const updatedFlight = await updateFlight(id, update);
  if (!updatedFlight) {
    return res.status(404).json({ error: "flight is not found" });
  }
  return res.status(200).json(updatedFlight);
}
