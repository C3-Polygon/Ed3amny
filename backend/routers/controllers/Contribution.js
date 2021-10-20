const connection = require("../../db/db");

const createNewContribution = (req, res) => {
  const { user_id, campaign_id, category_id, created_at, amount } = req.body;
  const addNewContribution = `INSERT INTO  contributions (user_id , campaign_id, category_id, created_at, amount) VALUES (?,?,?,?,?)`;

  const data = [user_id, campaign_id, category_id, created_at, amount];

  connection.query(addNewContribution, data, (err, result) => {
    if (err) {
      const error = {
        success: false,
        message: "Server Error",
        err: err,
      };
      res.json(error);
      res.status(500);
    } /// Think about stripe, msg return from bank true or flase
    /// Amount donated is saved and locked, awaiting bank confirmation
    /// if true then current target = current target + amount donated
    /// else bank returns error msg either incorrect visa credentials or no money in card
    if (result) {
      const success = {
        success: true,
        message: "success insert one record",
      };
      res.json(success);
      res.status(200);
    }
  });
};

const getOwnUserContributionsById = (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM contributions WHERE id = ${id}`;

  connection.query(query, (err, result) => {
    if (result) {
      return res.status(200).json({
        success: true,
        message: `User with the following id => ${id} has the following contributions`,
        result: result,
      });
    }
    if (err) {
      return res.status(404).json({
        success: false,
        message: `No contributions found for this user with the following id ==> ${id}`,
      });
    } else {
      res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    }
  });
};

module.exports = { createNewContribution,getOwnUserContributionsById };
