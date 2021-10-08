const connection = require("../../db/db");
const createNewFundraiser = (req, res) => {
  const { title, country, type, target, img, description } = req.body;
  const queryString = `INSERT INTO  campaigns (title , country, type, target, img, description) VALUES (?,?,?,?,?,?)`;
  const data = [title, country, type, target, img, description];
  connection.query(queryString, data, (err, result) => {
    if (result) {
      res.status(201).json({
        success: true,
        message: ` Success fundraiser created`,
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

const getAllFundraiser = (req, res) => {
  const query = `SELECT * FROM campaigns WHERE is_deleted=1`;
  connection.query(query, (error, result) => {
    if (error) {
      res.status(500).json({
        message: `Server Error`,
        error: error,
      });
    }
    res.status(200).json({ message: `All Fundraiser`, result: result });
  });
};

module.exports = { createNewFundraiser, getAllFundraiser };
