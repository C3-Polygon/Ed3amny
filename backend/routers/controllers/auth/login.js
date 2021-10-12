const connection = require("../../../db/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  const { email, passwordd } = req.body;
  const query = `SELECT * FROM users WHERE email = ?`;
  const data = [email, passwordd];
  connection.query(query, data, async (error, result) => {
    if (result.length) {
      const valid = await bcrypt.compare(passwordd, result[0].passwordd);
      if (valid) {
        const payload = {
          userId: result[0].id,
          firstName: result[0].firstName,
          lastName: result[0].lastName,
          country: result[0].country,
          // role_id: result[0].role_id,
        };
        const options = {
          expiresIn: "10day",
        };
        const token = await jwt.sign(payload, process.env.SECRET, options);
        res.status(200).json({
          success: true,
          message: `Email and Password are correct`,
          token: token,
        });
      } else {
        res.status(403).json({
          success: false,
          message: `Password is not correct`,
        });
      }
      if (error) {
        res.status(500).json({
          success: false,
          message: `Server Error`,
        });
      }
    } else {
      res.status(404).json({
        success: false,
        message: `The email doesn't exist`,
      });
    }
  });
};

module.exports = login;
