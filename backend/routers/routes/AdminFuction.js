const express = require("express");
const { GetAllUser, GetAllFundraiser, GetAllPendingPost, deleteFundraisers, AcceptFundraisers, rejectedTheFunders, createNewStory, updateStroy, deleteStroy } = require("../controllers/AdminFuction");

///Define router
const adminRouter = express.Router();

// middlewares
const authentication = require("../middlewares/authentication")

//Routes
///  [get]  [http://localhost:5000/admin]
adminRouter.get('/', GetAllUser);

///  [get]  [http://localhost:5000/admin/fundraiser]
adminRouter.get('/fundraiser', GetAllFundraiser);

///  [get]  [http://localhost:5000/admin/pending]
adminRouter.get('/pending', GetAllPendingPost);

///  [put]  [http://localhost:5000/admin/:id]
adminRouter.put('/:id', deleteFundraisers);

///  [put]  [http://localhost:5000/admin/accept/:id]
adminRouter.put('/accept/:id', AcceptFundraisers);

///  [put]  [http://localhost:5000/admin/rejected/:id]
adminRouter.put('/rejected/:id', rejectedTheFunders);

adminRouter.post('/', createNewStory);

adminRouter.put('/stroy/:id', updateStroy)

adminRouter.delete('/stroy/delete/:id', deleteStroy);

module.exports = adminRouter;