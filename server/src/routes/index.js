const planetsRouter = require("./planets/planets.router");
const starshipsRouter = require("./starships/starships.router");
const flightsFouter = require("./flights/flights.router");
const authRouter = require("./auth/auth.router");
const userRouter = require("./user/user.router");

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
  auth: {
    url: "/auth",
    router: authRouter,
  },
  user: {
    url: "/data/user",
    router: userRouter,
  },
};

module.exports = {
  planetsRouter,
  starshipsRouter,
  flightsFouter,
  authRouter,
  userRouter,
  ROUTES,
};
