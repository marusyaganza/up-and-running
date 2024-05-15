const {
  getFlights,
  scheduleFlight,
  cancelFlight,
  updateFlight,
} = require("../../models/flights/flights.model");

const { validationResult } = require("express-validator");

async function httpGetAllFlights(req, res) {
  const flights = await getFlights();
  return res.json(flights);
}

async function httpPostFlight(req, res) {
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

async function httpCancelFlight(req, res) {
  const id = req?.params?.id;
  const cancelledFlight = await cancelFlight(id);
  if (!cancelledFlight) {
    return res.status(404).json({ error: "flight is not found" });
  }
  return res.status(200).json(cancelledFlight);
}

async function httpUpdateFlight(req, res) {
  const id = req?.params?.id;
  const update = req.body;
  const updatedFlight = await updateFlight(id, update);
  if (!updatedFlight) {
    return res.status(404).json({ error: "flight is not found" });
  }
  return res.status(200).json(updatedFlight);
}

module.exports = {
  httpGetAllFlights,
  httpPostFlight,
  httpCancelFlight,
  httpUpdateFlight,
};
