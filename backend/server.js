const express = require("express");
const cors = require("cors");
const db = require("./db/db");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }))


// import Routers
const signupRouter = require("./routers/routes/auth/signup")
const fundraiserRouter = require("./routers/routes/fundraiser")
const loginRouter = require("./routers/routes/auth/login")
const adminRouter = require("./routers/routes/AdminFuction")
const bloodpostRouter = require('./routers/routes/bloodPost')
const searchRouter = require('./routers/routes/Services/search')
const contributionRouter = require('./routers/routes/Contribution')
const stripeRouter = require('./routers/routes/Services/stripe')
const helpSpecificRouter = require('./routers/routes/helpSpecific')

//app Routers
app.use("/signup", signupRouter);
app.use("/fundraiser", fundraiserRouter)
app.use("/login", loginRouter)
app.use('/admin', adminRouter);
app.use('/bloodpost', bloodpostRouter);
app.use('/search', searchRouter);
app.use("/Contribution", contributionRouter);
app.use('/payment',stripeRouter)
app.use('helpSpecific',helpSpecificRouter)

app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
    console.log(`Server On ${PORT}`);
});