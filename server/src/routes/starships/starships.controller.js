const { getStarships } = require("../../models/starships/starships.model");

async function starshipsController(req, res) {
  const startships = await getStarships();
  return res.json(startships.map((starship) => starship.model));
}

module.exports = starshipsController;
