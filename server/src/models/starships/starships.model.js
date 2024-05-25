const Starship = require("./starships.mongo");

async function getStarships() {
  const starships = await Starship.find();
  return starships;
}

module.exports = {
  getStarships,
};
