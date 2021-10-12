const connection = require("../../../db/db");

const bcrypt = require("bcrypt");

const register = async(req, res) => {
    let { firstName, lastName, age, img, email, passwordd, country } = req.body;
    let passwordHash = await bcrypt.hash(passwordd, 10);

    let data = [firstName, lastName, age, img, email, passwordHash, country];
    console.log(data);
    let query = `INSERT INTO users (firstName,lastName,age,img,email,passwordd,country) VALUES(?,?,?,?,?,?,?)`;

    connection.query(query, data, (error, result) => {

        if (error) {
            console.error(error);
            res.status(500).json({
                success: false,
                message: `Server Error`,
                error: error,
            });
        }
        res.status(200);
        res.json(result);
    });
};

module.exports = register;