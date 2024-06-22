import { getStarships } from "../../models/starships/starships.model";
import { Request, Response } from "express";

async function starshipsController(_: Request, res: Response) {
  const startships = await getStarships();
  return res.json(startships.map((starship) => starship.model));
}

export default starshipsController;
