const { getAllClocks, getOneClock, deleteClock, updateClock, createClock } = require("../queries/clocks");
const express = require("express");
const clocks = express.Router();

clocks.get("/", async(req, res) => {
    try {
        const allClocks = await getAllClocks();
        let truthyData = {success: true, payload: allClocks};
        let falsyData = {success: false, payload: "Server error"};
        if(allClocks[0]){
            res.status(200).json(truthyData);
        } else {
            res.status(404).json(falsyData);
        }
    } catch (error) {
        console.log(error);
    }
});

clocks.get("/:id", async(req, res) => {
    const {id} = req.params;
    try {
        const oneClock = await getOneClock(id);
        let truthyData = {success: true, payload: oneClock};
        let falsyData = {success: false, payload: "Clock not found"};
        if(oneClock.id) {
            res.status(200).json(truthyData);
        } else {
            res.status(404).json(falsyData);
        }
    } catch (error) {
        console.log(error);
    }
});

clocks.delete("/:id", async(req, res) =>{
    const {id} = req.params;
    try {
        const deletedClock = await deleteClock(id);
        let truthyData = {success: true, payload: deletedClock};
        let falsyData = {success: false, payload: "Clock not found"};
        if(deletedClock.id) {
            res.status(200).json(truthyData);
        } else {
            res.status(404).json(falsyData);
        }
    } catch (error) {
        console.log(error);
    }
});

clocks.put("/:id", async(req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        const updatedClock = await updateClock(id, body);
        let truthyData = {success: true, payload: updatedClock};
        let falsyData = {success: false, payload: "Clock not found"};
        if(updatedClock.id) {
            res.status(200).json(truthyData);
        } else {
            res.status(404).json(falsyData);
        }
    } catch (error) {
        console.log(error);
    }
});

clocks.post("/", async(req, res)=>{
    const {body} = req;
    console.log(body)
    try {
        const createdClock = await createClock(body);
        let truthyData = {success: true, payload: createdClock};
        let falsyData = {success: false, payload: "Clock creation error"};
        if(createdClock.id) {
            res.status(200).json(truthyData);
        } else {
            res.status(404).json(falsyData);
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = clocks;