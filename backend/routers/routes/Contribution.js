const express = require("express");

const { createNewContribution,getOwnUserContributionsById } = require("../controllers/Contribution");


// define router
const ContributionRouter = express.Router();

// //Routes
ContributionRouter.post('/', createNewContribution);
ContributionRouter.get('/:id', getOwnUserContributionsById)

module.exports = ContributionRouter;