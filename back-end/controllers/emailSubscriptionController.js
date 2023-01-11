const express = require("express");
const subscriptions = express.Router();

// const {
//     getAllUsers, 
//     getOneUser,
//     createUser,
//     deleteUser,
//     updateUser,
// } = require("../queries/users.js");

subscriptions.post("/", function(req, res, next) {
    try {
        let {firstname, email} = req.body;

        if(!email) {
            throw("Please provide ")
        }

        const emailSubscription = db.one(
            "INSERT INTO email_subscriptions (firstname, email) VALUES ($1, $2) RETURNING *",
            [firstname, email]
        );

        if(emailSubscription) {
            res.json({status: "success", message: "Subscript Successfully"})
        }
    } catch (error) {
        res.status(500).json({status: "success", message: error})
    }
})

module.exports = subscriptions;