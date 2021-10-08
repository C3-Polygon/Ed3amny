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
        success: false,
        message: `Server Error`,
        error: error,
      });
    }
    res
      .status(200)
      .json({ success: true, message: `All Fundraiser`, result: result });
  });
};

const updateFundRaiserById = (req, res) => {
  const id = req.params.id; // fundraiser id
  const { title, description, img, country } = req.body;
  const query = `SELECT * FROM campaigns Where id=${id}`;

  connection.query(query, (error, result) => {
    if (result) {
      const data = [title, description, img, country];
      const query1 = `UPDATE campaigns SET title=? , description=? , img=?  , country=? WHERE id = ${id}`;
      if (error) {
        res.status(200).json({
          success: false,
          message: `Error happened during query for the fundraiser`,
          error: error,
        });
      }
      connection.query(query1, data, (error, result) => {
        if (result) {
          res.status(200).json({
            success: true,
            message: `Success, updated the Fundraiser => ${id}`,
            result: result,
          });
        } else {
          res.status(404).json({
            success: false,
            message: `Fundraiser Not Found => ${id}`,
          });
        }
        if (error) {
          res.status(500).json({
            success: false,
            message: `Server error`,
          });
        }
      });
    }
  });
};

const getAllFundRaiserByUser = (req, res) => {
  let userid = req.params.userid;
  const query = `SELECT * FROM campaigns WHERE userid = ${userid} AND is_deleted=1`;
  connection.query(query, (error, result) => {
    if (error) {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        error: error,
      });
    }
    res.status(200).json({  success: true , message: "All FundRaiser By User", result: result });
  });
};

module.exports = {
  createNewFundraiser,
  getAllFundraiser,
  updateFundRaiserById,
  getAllFundRaiserByUser
};
