const connection = require("../../db/db");

//// Get All users

const GetAllUser = () => {
    const query = `SELECT * FROM users`;                                             //undefined
    connection.query = (query, (err, result) => {
        if (err) {
            const error = {
                success: false,
                message: "Somthing Error Try Again",
                err:err
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
