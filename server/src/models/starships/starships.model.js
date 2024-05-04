const Starship = require("./starships.mongo");

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

async function getStarships() {
  let starships = await Starship.find();

  if (!starships?.length) {
    starships = await fetchStarships();
    await Starship.insertMany(starships);
  }
  return starships;
}

module.exports = {
  getStarships,
};
