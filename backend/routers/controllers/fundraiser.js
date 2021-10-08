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

module.exports = createNewFundraiser;
