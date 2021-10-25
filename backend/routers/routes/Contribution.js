const express = require("express");

const { createNewContribution,getOwnUserContributionsById,getContributorsByCampaignId } = require("../controllers/Contribution");


// define router
const ContributionRouter = express.Router();

// middlewares
const authentication = require("../middlewares/authentication")

// //Routes
ContributionRouter.get('/contributors/:id',authentication,getContributorsByCampaignId)
ContributionRouter.post('/', createNewContribution);
ContributionRouter.get('/:id',authentication, getOwnUserContributionsById)


module.exports = ContributionRouter;