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
        }
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