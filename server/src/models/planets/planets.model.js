const Planet = require("./planets.mongo");

async function getPlanets() {
  const planets = await Planet.find();
  return planets.map((planet) => planet.name);
}

module.exports = {
  getPlanets,
};
