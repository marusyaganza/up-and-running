const planetsRouter = require("./planets/planets.router");
const starshipsRouter = require("./starships/starships.router");
const flightsFouter = require("./flights/flights.router");

const ROUTES = {
  planets: {
    url: "/data/planets",
    router: planetsRouter,
  },
  starships: {
    url: "/data/starships",
    router: starshipsRouter,
  },
  flights: {
    url: "/data/flights",
    router: flightsFouter,
  },
};

module.exports = { planetsRouter, starshipsRouter, flightsFouter, ROUTES };
