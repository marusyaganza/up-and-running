import express from "express";
import { getAllPalnets } from "./planets.controller";

const planetsRouter = express.Router();

planetsRouter.get("/", getAllPalnets);

export default planetsRouter;
