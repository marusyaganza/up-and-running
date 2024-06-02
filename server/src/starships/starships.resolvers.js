const { getStarships } = require("../models/starships/starships.model");

module.exports = {
  Query: {
    starships: async () => {
      const starships = await getStarships();
      return starships.map((starship) => starship.model);
    },
  },
};
