const db = require("../db/dbConfig.js");
const bcrypt = require("bcrypt");

// for admin only
const getAllUsers = async () => {
    try {
        var users = await db.any("SELECT * FROM users");
        return users;
    } catch (error) {
        return error;
    }
}

// regular users
const getOneUser = async (uid) => {
    try {
        const user = await db.one("SELECT * FROM users WHERE uid=$1", uid)
        return user;
    } catch (error) {
        return error;
    }
}


// regular users
const createUser = async (user) => {
    try {
        const createdUser = await db.one(
            "INSERT INTO users(first_name,last_name,age,email,user_name, password,is_admin) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *",
            [user.first_name,
             user.last_name,
             user.age,
             user.email,
             user.user_name,
             user.password,
             user.is_admin ? true : false,
            ]
        );
        return createdUser;
    } catch (error) {
        return error;
    }   
}

// regular users
const updateUser = async (uid, user) => {
    try {
        const updatedUser = await db.one(
            "UPDATE users SET first_name=$1, last_name=$2, age=$3, email=$4, user_name=$5 WHERE uid=$6 RETURNING * ",
            [
                user.first_name,
                user.last_name,
                user.age,
                user.email,
                user.user_name,
                uid,
            ]
        )
        return updatedUser;
    } catch (error) {
        return error;
    }
}


// for admin only
const deleteUser = async (uid) => {
    try {
        const deletedUser = await db.one(
            "DELETE FROM users WHERE uid=$1 RETURNING *",
            uid
        )
        return deletedUser;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllUsers, 
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
}