const { getPlanets } = require("../../models/planets/planets.model");

async function getAllPalnets(req, res) {
  const planets = await getPlanets();
  return res.json(planets.map((planet) => planet.name));
}

module.exports = {
  getAllPalnets,
};
