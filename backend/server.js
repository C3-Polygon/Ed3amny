
const express = require("express");
const cors = require("cors");
const db = require("./db/db");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

// import Routers
const signupRouter = require("./routers/routes/auth/signup")
const fundraiserRouter = require("./routers/routes/fundraiser")
const loginRouter =require("./routers/routes/auth/login")

//app Routers
app.use("/signup", signupRouter);
app.use("/fundraiser",fundraiserRouter)
app.use("/login",loginRouter)



app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});

