const db = require("../db/dbConfig.js");
const bcrypt = require("bcrypt");

const authUser = async(user_name, password) => {
    try {
        const user = await db.one(
            "SELECT * FROM users WHERE user_name=$1",
            user_name
        );
        const isValid = await bcrypt.compare(password, user.password);
        if(isValid) {
            const userInfo = {
                uid: user.uid,
                user_name: user.user_name,
                is_admin: user.is_admin,
            };
            return userInfo;
        }

    } catch (error) {
        return {error: "Invalid username/password, please try again."}
    }
}

module.exports = {
    authUser,
}