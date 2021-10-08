const express = require("express");
const  register  = require("../../controllers/auth/signup");

// define router
const authRouter = express.Router();

// 			routes
//post  http://localhost:5000/auth

authRouter.post("/", register);

module.exports = authRouter;
