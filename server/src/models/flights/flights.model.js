const Flight = require("./flights.mongo");

async function getFlights() {
  const flights = await Flight.find().sort("-date").exec();
  return flights;
}

async function getUpcomingFlights() {
  const flights = await Flight.find({
    $and: [{ date: { $gte: new Date() }, isCancelled: false }],
  })
    .sort("-date")
    .exec();
  return flights;
}

async function getPastFlights() {
  const flights = await Flight.find({
    $or: [
      {
        date: { $lt: new Date() },
      },
      { isCancelled: true },
    ],
  })
    .sort("-date")
    .exec();
  return flights;
}

async function updateFlight(id, update) {
  const flight = await Flight.findByIdAndUpdate(id, update, {
    new: true,
  });
  return flight;
}

async function scheduleFlight(input) {
  const flight = await Flight.create(input);
  return flight;
}

async function cancelFlight(id) {
  const flight = await Flight.findByIdAndUpdate(
    id,
    { isCancelled: true },
    {
      new: true,
    }
  );
  return flight;
}

module.exports = {
  getFlights,
  getUpcomingFlights,
  getPastFlights,
  scheduleFlight,
  updateFlight,
  cancelFlight,
};
