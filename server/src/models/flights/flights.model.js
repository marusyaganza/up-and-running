const Flight = require("./flights.mongo");

async function getFlights() {
  const flights = await Flight.find();
  return flights;
}

async function scheduleFlight(input) {
  const flight = await Flight.create(input);
  return flight;
}

module.exports = { getFlights, scheduleFlight };
