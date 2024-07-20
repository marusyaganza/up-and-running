import { Router } from "express";
import { getAllPalnets } from "./planets.controller";

const planetsRouter = Router();

planetsRouter.get("/", getAllPalnets);

export default planetsRouter;
