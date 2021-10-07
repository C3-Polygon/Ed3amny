
const express = require("express");
const cors = require("cors");
const db = require("./db/db");

//routers

const app = express();
app.use(cors());
app.use(express.json());
//app routers

app.use("*", (req, res) => res.status(404).json("NO content at this path"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});

