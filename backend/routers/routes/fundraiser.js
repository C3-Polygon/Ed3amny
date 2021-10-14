const express = require("express");

const {createNewFundraiser , getAllFundraiser, updateFundRaiserById , getAllFundRaiserByUser,deleteFundraiserByUser,getAllFundraiserByType,getTopFundraiserByCurrentTarget,getThreeRandomFundraisers } = require("../controllers/fundraiser");


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
fundraiserRouter.get("/getTopFundraiserByCurrentTarget", getTopFundraiserByCurrentTarget);
//  [get]  [http://localhost:5000/fundraiser/getTopFundraiserByCurrentTarget]
/* -----------------------------------------  */

/* -----------------------------------------  */
fundraiserRouter.get("/get/getTopFundraiserByCurrentTarget", getThreeRandomFundraisers);
//  [get]  [http://localhost:5000/fundraiser/get/getTopFundraiserByCurrentTarget]
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

