const PLANETS_API = process.env.PLANETS_API || "";
const STARSHIP_API = process.env.STARSHIP_API || "";

interface PlanetData {
  name: string;
}

interface StarshipData {
  model: string;
  name: string;
  passengers: number;
}

export async function fetchPlanets(): Promise<string[]> {
  let planets: string[] = [];

  await fetch(PLANETS_API)
    .then((res) => res.json())
    .then((json) => {
      planets = json.map((planet: PlanetData) => ({ name: planet.name }));
    })
    .catch((error) => console.error(error));

  return planets;
}

export async function fetchStarships(): Promise<StarshipData[]> {
  let starships: StarshipData[] = [];

  await fetch(STARSHIP_API)
    .then((res) => res.json())
    .then((json) => {
      starships = json.map((starship: StarshipData) => ({
        model: starship.model,
        name: starship.name,
        passengers: starship.passengers,
      }));
    })
    .catch((error) => console.error(error));

  return starships;
}
