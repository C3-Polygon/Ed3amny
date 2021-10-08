///const
const connection = require("../../db/db");


//// Get All users

const GetAllUser = (req, res) => {
    const query = `SELECT * FROM users`;
    connection.query(query, (err, result) => {
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
    connection.query(query, (err, result) => {

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
    const select = `SELECT * FROM campaigns where id = ${id}`;
    connection.query(select, (err, result) => {
        if (err) {
            const error = {
                success: false,
                message: `your ${id} is not Found`
            }
            res.json(error);
            res.status(500);
        }
        if (result.length) {
            const deleteid = `UPDATE campaigns SET is_deleted = 2  WHERE id = ${id}`;
            connection.query(deleteid, (err, response) => {
                if (err) {
                    res.status(500);
                    res.json(err);
                }
                if (response) {
                    const success = {
                        success: true,
                        message: "success updated post to is deleted"
                    }
                    res.json(success);
                    res.status(200);
                }
            })
        } else {
            res.json(`Your ${id} is not Found`);
        }
    })

}



// Accept The Fundraiser 0 - 1
const AcceptFundraisers = (req, res) => {
    const id = req.params.id;
    const select = `SELECT * FROM campaigns where id = ${id}`;
    connection.query(select, (err, result) => {
        if (err) {
            const error = {
                success: false,
                message: `Your id ===> ${id} is not Found`
            }
            res.json(error)
            res.status(500);
        }
        if (result.length) {
            const updateRow = `UPDATE campaigns SET is_deleted = 1  WHERE id = ${id}`;
            connection.query(updateRow, (err, response) => {

                if (err) {
                    res.json({
                        success: false,
                        message: "Server Error"
                    })
                    res.status(500);
                }
                if (response) {
                    res.json({
                        success: true,
                        message: "success change the post from pending to accept"
                    })
                    res.status(200);
                }
            })
        } else {
            res.json(`Your ${id} is not Found`);
        }
    })
}

///reject the fundraiser 
const rejectedTheFunders = (req, res) => {
    const id = req.params.id;
    const select = `SELECT * FROM campaigns where id = ${id}`;
    connection.query(select, (err, response) => {
        console.log("GOGOGOGOGOGOOG", response);
        if (err) {
            const error = {
                success: false,
                message: "Server Error"
            }
            res.json(error);
            res.status(500);
        }
        if (response.length) {
            const reject = `UPDATE campaigns SET is_deleted = 2  WHERE id = ${id}`;
            connection.query(reject, (err, response) => {

                if (err) {
                    res.json({
                        success: false,
                        message: "Server Error"
                    })
                    res.status(500);
                }
                if (response) {
                    res.json({
                        success: true,
                        message: "success updated fundraiser to rejected"

                    })
                    res.status(200);
                }
            })
        } else {
            res.json(`your ${id} is not found`);
        }
    })
}
module.exports = { GetAllUser, GetAllFundraiser, GetAllPendingPost, deleteFundraisers, AcceptFundraisers, rejectedTheFunders };