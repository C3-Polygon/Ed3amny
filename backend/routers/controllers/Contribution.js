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
                err: err
            }
            res.json(error);
            res.status(500);
        }                                                        /// Think about stripe, msg return from bank true or flase
                                                                 /// Amount donated is saved and locked, awaiting bank confirmation
                                                                 /// if true then current target = current target + amount donated
                                                                 /// else bank returns error msg either incorrect visa credentials or no money in card
        if (result) {
            const success = {
                success: true,
                message: "success insert one record"
            }
            res.json(success);
            res.status(200);
        }
    })
}


module.exports = { createNewContribution };