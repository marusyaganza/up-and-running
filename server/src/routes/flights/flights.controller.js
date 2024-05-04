const {
  getFlights,
  scheduleFlight,
} = require("../../models/flights/flights.model");

async function getAllFlights(req, res) {
  const flights = await getFlights();
  return res.json(flights);
}

async function postFlight(req, res) {
  const input = req.body;
  const flight = await scheduleFlight(input);
  return res.status(201).json(flight);
}

module.exports = {
  getAllFlights,
  postFlight,
};
