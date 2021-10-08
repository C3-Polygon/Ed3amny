const express = require("express");

const { createNewContribution } = require("../controllers/Contribution");


// define router
const ContributionRouter = express.Router();

// //Routes
ContributionRouter.post('/', createNewContribution);

module.exports = ContributionRouter;