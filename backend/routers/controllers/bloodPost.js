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

/// get all bloodBank 
const getallBloodPost = (req, res) => {
    const bloodBank = 'SELECT * FROM bloodpost';
    connection.query(bloodBank, (err, result) => {
        if (err) {
            const error = {
                success: false,
                message: "SERVER ERROR",
                error: err
            }
            res.json(error);
            res.status(500);
        }
        if (result) {
            const success = {
                success: true,
                message: "All The Blood ",
                Data: result
            }
            res.json(success);
            res.status(200);
        }
    })
}
module.exports = { createNewBloodPost, getallBloodPost }