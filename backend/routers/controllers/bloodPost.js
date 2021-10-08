const connection = require("../../db/db");

const createNewBloodPost = (req, res) => {
  const { title, description } = req.body;
  const queryString = `INSERT INTO  bloodpost (title , description) VALUES (?,?)`;
  const data = [title, description];
  connection.query(queryString, data, (err, result) => {
    if (result) {
      res.status(201).json({
        success: true,
        message: ` Success bloodpost created`,
        fundraiser: result,
      });
    }
    if (err) {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err,
      });
    }
  });
};

module.exports = {createNewBloodPost}