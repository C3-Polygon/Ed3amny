///const
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



/// get all Fundraisers pending
const GetAllPendingPost = (req, res) => {
    const query = `SELECT * FROM campaigns where is_deleted = 0`;
    connection.query(query, (err, result) => {
        if (err) {
            const error = {
                success: false,
                message: "There's no Fundraiser is pending"
            }
            res.json(error);
            res.status(500);
        }
        if (result) {
            const success = {
                success: true,
                message: "All Fundraiser is pending",
                Fundraiser: result
            }
            res.json(success);
            res.status(200);
        }
    })
}

// / Delete Fundraisers

const deleteFundraisers = (req, res) => {
    id = req.params.id;
    const deleteid = `UPDATE campaigns SET is_deleted = 2  WHERE id = ${id}`;
    connection.query(deleteid, (err, res) => {
        if (err) {
            const error = {
                success: false,
                message: `your ${id} is not Found`
            }
            res.json(error);
            res.status(500);
        }
        if (res) {
            const success = {
                success: true,
                message: "success Delete Your Fundraiser"
            }
            res.json(success);
            res.status(200);
        }
    })

}



// Accept The Fundraiser 0 - 1
const AcceptFundraisers = (req, res) => {
    const id = req.params.id;
    const updateRow = `UPDATE campaigns SET is_deleted = 1  WHERE id = ${id}`;
    connection.query(updateRow, (err, result) => {
        if (err) {
            const error = {
                success: false,
                message: `Your id ===> ${id} is not Found`
            }
            res.json(error)
            res.status(500);
        }
        if (result) {
            const success = {
                success: true,
                message: "success change the post from pending to accept"
            }
            res.json(success);
            res.status(200);
        }
    })
}

///reject the fundraiser 
const rejectedTheFunders = (req, res) => {
    const id = req.params.id;
    const reject = `UPDATE campaigns SET is_deleted = 2  WHERE id = ${id}`;
    connection.query(reject, (err, response) => {
        if (err) {
            const error = {
                success: false,
                message: "Server Error"
            }
            res.json(error);
            res.status(500);
        }
        if (response) {
            const success = {
                success: true,
                message: "success updated fundraiser to rejected"
            }
            res.json(success);
            res.status(200);
        }
    })
}
module.exports = { GetAllUser, GetAllFundraiser, GetAllPendingPost, deleteFundraisers, AcceptFundraisers, rejectedTheFunders }