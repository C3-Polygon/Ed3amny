const express = require("express");

const { createNewFundraiser, getAllFundraiser, getFundRaiserById, updateFundRaiserById, getAllFundRaiserByUser, deleteFundraiserByUser, getAllFundraiserByType, getTopFundraiserByCurrentTarget, getThreeRandomFundraisers, getAllCategories, getTotalsCategories, getCategorybyId, getTotalsFundreiser } = require("../controllers/fundraiser");


// define router
const fundraiserRouter = express.Router();


// middlewares
const authentication = require("../middlewares/authentication")

// //Routes

/* -----------------------------------------  */
fundraiserRouter.post("/", authentication, createNewFundraiser);
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
fundraiserRouter.put("/", authentication, updateFundRaiserById);
//  [put]  [http://localhost:5000/fundraiser]
/* -----------------------------------------  */


/* -----------------------------------------  */
fundraiserRouter.get("/:userid", authentication, getAllFundRaiserByUser);
//  [get]  [http://localhost:5000/fundraiser/:userid]
/* -----------------------------------------  */

/* -----------------------------------------  */
fundraiserRouter.get("/id/:id", getFundRaiserById);
//  [get]  [http://localhost:5000/fundraiser/id/:id]
/* -----------------------------------------  */


/* -----------------------------------------  */
fundraiserRouter.delete("/:id", authentication, deleteFundraiserByUser);
//  [delete]  [http://localhost:5000/fundraiser/:id]
/* -----------------------------------------  */
fundraiserRouter.get("/categories/categories", getAllCategories)

fundraiserRouter.get('/categorys/categorys/categorys', getTotalsCategories)

fundraiserRouter.get('/category/categorys/categorys/:id', getCategorybyId)

fundraiserRouter.get("/typee/:typee", getAllFundraiserByType);

// fundraiserRouter.get('/pending')

fundraiserRouter.get("/admin/dashbord/get/getallfundreiser", getTotalsFundreiser)
module.exports = fundraiserRouter;