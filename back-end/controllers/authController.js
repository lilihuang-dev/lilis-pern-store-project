const express = require("express");
const db = require("../db/dbConfig.js");
const auth = express.Router();
const bcrypt = require("bcrypt");
const {createUser} = require("../queries/users.js");
const { authUser } = require("../queries/auth.js");

// create a auth
auth.post("/sign_up", async(req, res) => {

    const { password } = req.body;
    const user = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.is_admin = user.user_name.toLowerCase() === "lilihuang@pursuit";
    console.log(user)
    const createdUser = await createUser(user);

    let truthyData = {success: true, payload: createdUser};
    let falsyData = {success: false, payload: "Error while creating the user"};

    if(createdUser.uid) {
        res.json(truthyData);
    } else {
        res.status(500).json(falsyData);
    }
});

// login as an exsiting user
auth.post("/login", async(req, res) => {

    const {user_name, password} = req.body;
    const userInfo = await authUser(user_name, password);

    let truthyData = {success: true, payload: userInfo};
    let falsyData = {success: false, payload: "Incorrect Username or Password"};

    try {

        if(!isNaN(userInfo.uid)) {
            res.json(truthyData);
        } else {
            res.status(500).json({ success: false, error: userInfo.error });
        }

    } catch (error) {
        res.status(500).json(falsyData);
    }
})

module.exports = auth;