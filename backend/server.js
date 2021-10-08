
const express = require("express");
const cors = require("cors");
const db = require("./db/db");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

// import Routers
const authRouter = require("./routers/routes/auth/signup")



//app Routers
app.use("/auth", authRouter);
app.use("*", (req, res) => res.status(404).json("NO content at this path"));



app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});

