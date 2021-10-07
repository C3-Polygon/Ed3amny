const res = require("express/lib/response");
const connection = require("../../db/db");

//// Get All users

const GetAllUser = (req, res) => {
    const query = `SELECT * FROM users`;
    connection.query = (query, (err, result) => {
        if (err) {
            const error = {
                success: false,
                message: "Somthing Error Try Again",
                err: err
            }
            res.json(error);
            res.status(500);
        }
        if (result) {
            const success = {
                success: true,
                message: "All users ",
                result: result
            }
            res.json(success);
            res.status(200);

        }
    })
}


// get all Fundraiser


const GetAllFundraiser = (req, res) => {
    const query = `SELECT * FROM campaigns`;
    connection.query = (query, (err, result) => {
        if (err) {
            const error = {
                success: false,
                message: err
            }
            res.json(error);
            res.status(500);
        }
        if (result) {
            const success = {
                success: true,
                message: "All Fundraiser",
                Fundraisers: result
            }
            res.json(success);
            res.status(200);
        }
    })
}