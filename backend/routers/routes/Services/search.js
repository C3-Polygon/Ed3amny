const express = require("express");
const { searchForCampaigns } = require("../../controllers/Services/search")


const searchRouter = express.Router();

searchRouter.get('/', searchForCampaigns);



module.exports = searchRouter;