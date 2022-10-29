const express = require("express");
const users = express.Router();

const {
    getAllUsers, 
    getOneUser,
    createUser,
    deleteUser,
    updateUser,
} = require("../queries/users.js");


// get all users, for admin only
users.get("/", async(req, res) => {
    try {
        const users = await getAllUsers();
        let truthyData = {success: true, payload: users};
        let falsyData = {success: false, payload: "Server error"};
        if(users[0]) {
            res.status(200).json(truthyData)
        } else {
            res.status(500).json(falsyData);
        }
    } catch (error) {
        console.log(error)
    }
});

// get one user, for regular user login
users.get("/:uid", async(req, res) => {
    try {
        const {uid} = req.params;
        const user = await getOneUser(uid);
        let truthyData = {success: true, payload: user};
        let falsyData = {success: false, payload: `server error, no user at index ${uid}`}
        if(user.uid) {
            res.status(200).json(truthyData)
        } else {
            res.status(500).json(falsyData);
        }

    } catch (error) {
        console.log(error)
    }
})

// update user, for regular user update file
users.put("/:uid", async(req, res) => {
    try {
        const {uid} = req.params;
        const user = req.body;

        const updatedUser = await updateUser(uid, user);
        let truthyData = {success: true, payload: updatedUser};
        let falsyData = {success: false, payload: `unable to update user ${uid}`}
        if(updateUser.uid) {
            res.status(200).json(truthyData)
        } else {
            res.status(500).json(falsyData)
        }
    } catch (error) {
        console.log(error);
    }
})

// post user, for regular user sign up
users.post("/", async(req, res) => {
    try {
        const user = req.body;
        const createdUser = await createUser(user);
        let truthyData = {success: true, payload: createdUser};
        let falsyData = {success: false, payload: "unable to create user..."};
        if(createdUser.uid) {
            res.status(200).json(truthyData);
        } else {
            res.status(500).json(falsyData);
        }
    } catch (error) {
        console.log(error)
    }
})

// delete user, for admin only
users.delete("/:uid", async(req, res) => {
    try {
        const {uid} = req.params;
        const deletedUser = await deleteUser(uid);
        let truthyData = {success: true, payload: deletedUser};
        let falsyData = {success: false, payload: `unable to delete user ${uid}`};
        if(deletedUser.uid){
            res.status(200).json(truthyData);
        } else {
            res.status(500).json(falsyData);
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = users;