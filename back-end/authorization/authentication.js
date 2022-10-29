const bcrypt = require("bcrypt");

// generated the hash, store it in the database
    // use it toverify a password and authenticate a user trying to log in.
// Using Async/Await
async function hashPassword(plaintextPassword) {
    const hash = await bcrypt.hash(plaintextPassword, 10);
    return hash;
}    

// protect routes that can be accessed only after a user is logged in 
function checkAuthentication(req, res, next) {
    try {
        if(req.isAuthenticated()) { // return true if user is logged in
            next();
        } else {
            res.redirect("/login")
        }
    } catch (error) {
        res.status(401).json({success: false, payload: "Something wrong, login again"});
    }
}

// compare password
async function comparePassword(plaintextPassword, hash) {
    const result = await bcrypt.compare(plaintextPassword, hash);
    return result;
}

module.exports = {
    hashPassword,
    checkAuthentication,
    comparePassword,
}
