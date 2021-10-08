const express = require("express");
const  register  = require("../../controllers/auth/signup");

// define router
const authRouter = express.Router();

// 			routes
//post  http://localhost:5000/auth/signup

authRouter.post("/signup", register);

module.exports = authRouter;
