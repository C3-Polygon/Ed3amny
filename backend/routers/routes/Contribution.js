const express = require("express");

const { createNewContribution,getOwnUserContributionsById } = require("../controllers/Contribution");


// define router
const ContributionRouter = express.Router();

// middlewares
const authentication = require("../middlewares/authentication")

// //Routes
ContributionRouter.post('/', createNewContribution);
ContributionRouter.get('/:id', getOwnUserContributionsById)

module.exports = ContributionRouter;