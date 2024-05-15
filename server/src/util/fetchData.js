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

async function fetchStarships() {
  let planets = [];

  await fetch(process.env.STARSHIP_API)
    .then((res) => res.json())
    .then((json) => {
      planets = json.map((starship) => ({
        model: starship.model,
        name: starship.name,
        passengers: starship.passengers,
      }));
    })
    .catch((error) => console.error(error));

  return planets;
}

module.exports = { fetchPlanets, fetchStarships };
