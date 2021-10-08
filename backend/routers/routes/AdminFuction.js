const express = require("express");
const { GetAllUser, GetAllFundraiser, GetAllPendingPost, deleteFundraisers, AcceptFundraisers, rejectedTheFunders } = require("../controllers/AdminFuction");


const adminRouter = express.Router();

adminRouter.get('/', GetAllUser);
adminRouter.get('/fundraiser', GetAllFundraiser);
adminRouter.get('/pending', GetAllPendingPost);
adminRouter.put('/:id', deleteFundraisers);
adminRouter.put('/accept/:id', AcceptFundraisers);
adminRouter.put('/rejected/:id', rejectedTheFunders);


module.exports = adminRouter;