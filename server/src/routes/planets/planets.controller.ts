import { getPlanets } from "../../models/planets/planets.model";
import { Request, Response } from "express";

export async function getAllPalnets(_: Request, res: Response) {
  const planets = await getPlanets();
  return res.json(planets.map((planet) => planet.name));
}
