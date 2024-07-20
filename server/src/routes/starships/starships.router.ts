import { Router } from "express";
import starshipsController from "./starships.controller";

const starshipsRouter = Router();

starshipsRouter.get("/", starshipsController);

export default starshipsRouter;
