const Planet = require("./planets.mongo");

async function getPlanets() {
  const planets = await Planet.find();
  return planets;
}

module.exports = {
  getPlanets,
};
