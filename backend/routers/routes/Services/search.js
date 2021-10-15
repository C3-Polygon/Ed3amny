const express = require("express");
const { searchForCampaigns } = require("../../controllers/Services/search")
const { updateUserById,GetUserById } = require ("./../../controllers/Services/accountSettings")

const searchRouter = express.Router();

searchRouter.get('/', searchForCampaigns);
searchRouter.put('/AccountSettings/update/:id', updateUserById);
searchRouter.get('/GetUserById/:id', GetUserById);



module.exports = searchRouter;