const  login  = require("../../controllers/auth/login");

// define router
const authRouter = require("./signup");

// 			routes
//post  http://localhost:5000/auth/login

authRouter.post("/login", login);


