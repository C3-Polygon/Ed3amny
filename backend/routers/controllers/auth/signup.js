const connection = require("../../../db/db");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  let { firstName, lastName, age, img, email, password,country } = req.body;
 
let passwordHash = await bcrypt.hash(password, 10);

  let data = [firstName, lastName, age, img, email, passwordHash,country];
  let query = `INSERT INTO users (firstName,lastName,age,img,email,password,country) VALUES(?,?,?,?,?,?,?)`;

  connection.query(query, data, (error, result) => {
    if (error) {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        error: error,
      });
    }
    res.status(200);
    res.json(result);
  });
};

module.exports = register;
