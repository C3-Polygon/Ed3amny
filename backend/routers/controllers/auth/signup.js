const connection = require("../../../db/db");

const bcrypt = require("bcrypt");

const register = async (req, res) => {
  let { firstName, lastName, img, age, email, passwordd, country } = req.body;
  let passwordHash = await bcrypt.hash(passwordd, 10);


    let data = [firstName, lastName, age, img, email, passwordHash, country];
    let query = `INSERT INTO users (firstName,lastName,age,img,email,passwordd,country) VALUES(?,?,?,?,?,?,?)`;

    connection.query(query, data, (error, result) => {
        console.log("result" ,result)
         if (result){
            res.status(200);
            res.json(result);
         }
        // if (error.keyPattern) {
        //     return res.status(409).json({
        //       success: false,
        //       message: `Duplicate Email found`,
        //       error:error
        //     });
        //   }
        if (error) {
          console.log(error)
            res.status(409).json({
                success: false,
                message: `Duplicate Email Found`,
                error: error,
            });
        }
        // res.status(500);
        //     res.json({
        //         success: false,
        //         message: `Server Error`,
        //         error: error,
        //     });
    });

};

module.exports = register;
