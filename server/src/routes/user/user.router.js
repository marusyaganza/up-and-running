const express = require("express");
const { httpGetUser } = require("./user.controller");
const { checkLoggedIn } = require("../../util/auth");

const userRouter = express.Router();

userRouter.get("/", checkLoggedIn, httpGetUser);

module.exports = userRouter;
