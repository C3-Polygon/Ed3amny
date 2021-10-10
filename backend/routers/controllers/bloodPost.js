const e = require("express");
const { re } = require("nodemon/node_modules/semver");
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
                bloodpost: result,
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
const getAllBloodPost = (req, res) => {
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

/// delete the bloodpost 

const deleteTheBloodPost = (req, res) => {
    const id = req.params.id;
    const selectPost = `SELECT * FROM bloodpost WHERE id =${id}`;
    connection.query(selectPost, (err, response) => {
        if (err) {
            res.json({
                success: false,
                message: "something error",
                error: err
            })
            res.status(500);
        }
        if (response.length) {
            const deletePost = `UPDATE bloodpost SET is_deleted = 2 where id = ${id}`;
            connection.query(deletePost, (err, response) => {
                if (response) {
                    res.json({
                        success: true,
                        message: "success updated row"
                    });
                    res.status(200);
                }
                if (err) {
                    res.json({
                        success: false,
                        message: "ERRROR",
                        error: err
                    })
                    res.status(500);
                }
            })

        } else {
            res.json({
                success: false,
                message: `The id you was enterd ${id} is not Found`,
            })
            res.status(500);
        }
    })
}


const updateBloodPost = (req, res) => {
    const { title , description   } = req.body;
    const id = req.params.id;
    const queryString = `UPDATE bloodpost SET title = ${title} , description = ${description} where id = ${id}`;
    const data = [ title , description ];
    connection.query(queryString, data, (err, result) => {
        if (result) {
            res.status(201).json({
                success: true,
                message: ` Success bloodpost update`,
                bloodpost: result,
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
module.exports = { createNewBloodPost, getAllBloodPost, deleteTheBloodPost , updateBloodPost};