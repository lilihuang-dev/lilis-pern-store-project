const db = require("../db/dbConfig.js");

const getAllClocks = async() => {
    try {
        const allClocks = await db.any("SELECT * FROM clocks;");
        return allClocks;
    } catch (error) {
        return error;
    }
};

const getOneClock = async(cid) => {
    try {
        const clock = await db.one("SELECT * FROM clocks WHERE cid=$1",cid);
        return clock;
    } catch (error) {
        return error;
    }
};

const deleteClock = async(cid) => {
    try {
        const deletedClock = await db.one("DELETE FROM clocks WHERE cid=$1 RETURNING *",cid);
        return deletedClock;
    } catch (error) {
        return error;
    }
};

const updateClock = async(cid, clock) =>{
    try {
        const updatedClock = await db.one("UPDATE clocks SET name=$1, description=$2, image=$3, dimensions=$4, color=$5, material=$6, price=$7, rating=$8, featured=$9, stock=$10, quantity=$11 WHERE cid=$12 RETURNING *",
        [clock.name, clock.description, clock.image, clock.dimensions, clock.color, clock.material, clock.price, clock.rating, clock.featured, clock.stock, clock.quantity, cid]);
        return updatedClock;
    } catch (error) {
        return error;
    }
};

const createClock = async(clock) =>{
    try {
        const createdClock = await db.one(
            "INSERT INTO clocks(name, description, image, dimensions, color, material, price, rating, featured, stock, quantity) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *",
            [clock.name, clock.description, clock.image, clock.dimensions, clock.color, clock.material, clock.price, clock.rating, clock.featured, clock.stock, clock.quantity]
        )
        return createdClock;
    } catch (error) {
        return error;
        
    }
}

module.exports = {
    getAllClocks,
    getOneClock,
    deleteClock,
    updateClock,
    createClock
}