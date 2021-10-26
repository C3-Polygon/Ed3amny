const express = require("express");

const { createNewContribution,getOwnUserContributionsById,getContributorsByCampaignId,getContributorsByCampaignIdWithoutLimit } = require("../controllers/Contribution");


// define router
const ContributionRouter = express.Router();

// middlewares
const authentication = require("../middlewares/authentication")

// //Routes
ContributionRouter.get('/contributors/:id',getContributorsByCampaignId)
ContributionRouter.post('/', createNewContribution);
ContributionRouter.get('/:id',authentication, getOwnUserContributionsById)
ContributionRouter.get('/allContributors/:id', getContributorsByCampaignIdWithoutLimit)


module.exports = ContributionRouter;