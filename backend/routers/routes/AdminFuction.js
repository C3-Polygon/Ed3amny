const express = require("express");
const { GetAllUser, GetAllFundraiser, GetAllPendingPost, deleteFundraisers, AcceptFundraisers, rejectedTheFunders } = require("../controllers/AdminFuction");

///const 
const adminRouter = express.Router();

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


module.exports = adminRouter;