const express = require("express");
const { createNewBloodPost } = require("../controllers/bloodPost");

//Define Router
const bloodpostRouter = express.Router();

// middlewares
const authentication = require("../middlewares/authentication")

//Routes
bloodpostRouter.post('/', createNewBloodPost);
//update
//delete


module.exports = bloodpostRouter;