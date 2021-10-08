const express = require("express");

const {createNewFundraiser , getAllFundraiser, updateFundRaiserById , getAllFundRaiserByUser } = require("../controllers/fundraiser");


// define router
const fundraiserRouter = express.Router();

// //Routes

/* -----------------------------------------  */
fundraiserRouter.post("/", createNewFundraiser);
//  [post]  [http://localhost:5000/fundraiser]
/* -----------------------------------------  */

/* -----------------------------------------  */
fundraiserRouter.get("/", getAllFundraiser);
//  [get]  [http://localhost:5000/fundraiser]
/* -----------------------------------------  */

/* -----------------------------------------  */
fundraiserRouter.put("/", updateFundRaiserById);
//  [put]  [http://localhost:5000/fundraiser]
/* -----------------------------------------  */


/* -----------------------------------------  */ 
fundraiserRouter.get("/:userid", getAllFundRaiserByUser);
//  [get]  [http://localhost:5000/fundraiser/:userid]
/* -----------------------------------------  */

module.exports = fundraiserRouter;

