const express = require("express");
const { createNewBloodPost, getallBloodPost, deleteTheBloodPost } = require("../controllers/bloodPost");

//Define Router
const bloodpostRouter = express.Router();

// middlewares
const authentication = require("../middlewares/authentication")

//Routes
bloodpostRouter.post('/', createNewBloodPost);
bloodpostRouter.get('/', getallBloodPost);
bloodpostRouter.put('/:id', deleteTheBloodPost);
//update
//delete


module.exports = bloodpostRouter;