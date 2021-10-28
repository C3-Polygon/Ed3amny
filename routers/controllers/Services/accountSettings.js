const connection = require("../../../db/db");

const updateUserById = (req, res) => {
  const id = req.params.id; // user id
  const { firstName, lastName, age, img, country, phoneNumber } = req.body;
  const query = `SELECT * FROM users Where id=${id}`;

  connection.query(query, (error, result) => {
    if (result) {
      const data = [firstName, lastName, age, img, country, phoneNumber];
      const query1 = `UPDATE users SET firstName=? , lastName=? , age=?  , img=? , country=? , phoneNumber=? WHERE id = ${id}`;
      if (error) {
        return res.status(401).json({
          success: false,
          message: `Error happened during query for the user`,
          error: error,
        });
      }
      connection.query(query1, data, (error, result) => {
        if (result) {
          res.status(200).json({
            success: true,
            message: `Success, updated the User => ${id}`,
            result: result,
          });
        } else {
          return res.status(404).json({
            success: false,
            message: `User Not Found => ${id}`,
          });
        }
        if (error) {
          return res.status(500).json({
            success: false,
            message: `Server error`,
          });
        }
      });
    }
  });
};

const GetUserById = (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM users WHERE id=${id}`;
  connection.query(query, (err, result) => {
    if (err) {
      const error = {
        success: false,
        message: "Server Error",
        err: err,
      };
      return res.status(500).json(error);
    }
    if (result) {
      const success = {
        success: true,
        message: "User",
        result: result,
      };
      res.status(200).json(success);
    } else {
      const success = {
        success: false,
        message: "User not Found",
        result: result,
      };
      return res.status(404).json(success);
    }
  });
};

module.exports = { updateUserById, GetUserById };
