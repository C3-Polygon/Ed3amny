const express = require("express");
const createNewFundraiser = require("../controllers/fundraiser");

// define router
const fundraiserRouter = express.Router();

//Routes

/* -----------------------------------------  */ 
fundraiserRouter.post("/", createNewFundraiser);
//  [post]  [http://localhost:5000/fundraiser]
/* -----------------------------------------  */ 

module.exports = fundraiserRouter;
