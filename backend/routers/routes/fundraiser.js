const express = require("express");

const {createNewFundraiser , getAllFundraiser, updateFundRaiserById , getAllFundRaiserByUser,deleteFundraiserByUser,getAllFundraiserByType } = require("../controllers/fundraiser");


// define router
const fundraiserRouter = express.Router();


// middlewares
const authentication = require("../middlewares/authentication")

// //Routes

/* -----------------------------------------  */
fundraiserRouter.post("/", authentication , createNewFundraiser);
//  [post]  [http://localhost:5000/fundraiser]
/* -----------------------------------------  */

/* -----------------------------------------  */
fundraiserRouter.get("/", getAllFundraiser);
//  [get]  [http://localhost:5000/fundraiser]
/* -----------------------------------------  */

/* -----------------------------------------  */
fundraiserRouter.put("/",  authentication , updateFundRaiserById);
//  [put]  [http://localhost:5000/fundraiser]
/* -----------------------------------------  */


/* -----------------------------------------  */ 
fundraiserRouter.get("/:userid", authentication ,  getAllFundRaiserByUser);
//  [get]  [http://localhost:5000/fundraiser/:userid]
/* -----------------------------------------  */


/* -----------------------------------------  */ 
fundraiserRouter.delete("/:id", authentication ,  deleteFundraiserByUser);
//  [delete]  [http://localhost:5000/fundraiser/:id]
/* -----------------------------------------  */

fundraiserRouter.get("type/:type", getAllFundraiserByType);

module.exports = fundraiserRouter;

