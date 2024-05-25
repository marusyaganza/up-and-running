const express = require("express");
const starshipsController = require("./starships.controller");

const starshipsRouter = express.Router();

starshipsRouter.get("/", starshipsController);

module.exports = starshipsRouter;
