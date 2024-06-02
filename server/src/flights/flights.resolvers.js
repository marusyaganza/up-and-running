const {
  getFlights,
  getPastFlights,
  getUpcomingFlights,
  scheduleFlight,
  updateFlight,
  cancelFlight,
} = require("../models/flights/flights.model");

module.exports = {
  Query: {
    flights: async (_, { filter }) => {
      if (filter?.upcoming) {
        const flights = await getUpcomingFlights();
        return flights;
      }

      if (filter?.past) {
        const flights = await getPastFlights();
        return flights;
      }
      flights = await getFlights();
      return flights;
    },
  },

  Mutation: {
    addNewFlight: async (_, { input }) => {
      const flight = await scheduleFlight(input);
      return flight;
    },
    cancelFlight: async (_, { id }) => {
      const flight = await cancelFlight(id);
      return flight;
    },
    updateFlight: async (_, { id, input }) => {
      const flight = await updateFlight(id, input);
      return flight;
    },
  },
};
