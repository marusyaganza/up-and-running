const planetsRouter = require("./planets/planets.router");
const starshipsRouter = require("./starships/starships.router");
const flightsFouter = require("./flights/flights.router");

const ROUTES = {
  planets: {
    url: "/planets",
    router: planetsRouter,
  },
  starships: {
    url: "/starships",
    router: starshipsRouter,
  },
  flights: {
    url: "/flights",
    router: flightsFouter,
  },
};

module.exports = { planetsRouter, starshipsRouter, flightsFouter, ROUTES };
