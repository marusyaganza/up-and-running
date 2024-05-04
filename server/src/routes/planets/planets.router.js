const express = require("express");
const { getAllPalnets } = require("./planets.controller");

const planetsRouter = express.Router();

planetsRouter.get("/", getAllPalnets);

module.exports = planetsRouter;
