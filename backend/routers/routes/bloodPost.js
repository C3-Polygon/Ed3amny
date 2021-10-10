const express = require("express");
const { createNewBloodPost, getallBloodPost } = require("../controllers/bloodPost");

//Define Router
const bloodpostRouter = express.Router();

// middlewares
const authentication = require("../middlewares/authentication")

//Routes
bloodpostRouter.post('/', createNewBloodPost);
bloodpostRouter.get('/', getallBloodPost);
//update
//delete


module.exports = bloodpostRouter;