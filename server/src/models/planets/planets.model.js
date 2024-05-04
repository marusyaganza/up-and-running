const Planet = require("./planets.mongo");

async function fetchPlanets() {
  let planets = [];

  await fetch(process.env.PLANETS_API)
    .then((res) => res.json())
    .then((json) => {
      planets = json.map((planet) => ({ name: planet.name }));
    })
    .catch((error) => console.error(error));

  return planets;
}

async function getPlanets() {
  let planets = await Planet.find();
  if (!planets.length) {
    planets = await fetchPlanets();
    await Planet.insertMany(planets, { upsert: true });
  }
  return planets;
}

module.exports = {
  getPlanets,
};
