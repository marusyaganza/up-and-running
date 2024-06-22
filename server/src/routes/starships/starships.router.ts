import express from "express";
import starshipsController from "./starships.controller";

const starshipsRouter = express.Router();

starshipsRouter.get("/", starshipsController);

export default starshipsRouter;
