const { getPlanets } = require("../models/planets/planets.model");

module.exports = {
  Query: {
    planets: async () => {
      const planets = await getPlanets();
      return planets;
    },
  },
};
