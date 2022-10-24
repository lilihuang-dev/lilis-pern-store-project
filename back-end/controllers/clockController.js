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

clocks.get("/:cid", async(req, res) => {
    console.log("21",req.params)
    const {cid} = req.params;
    console.log("controller",cid)
    try {
        const oneClock = await getOneClock(cid);
        console.log(oneClock)
        let truthyData = {success: true, payload: oneClock};
        let falsyData = {success: false, payload: "Clock not found"};
        if(oneClock.cid) {
            res.status(200).json(truthyData);
        } else {
            res.status(404).json(falsyData);
        }
    } catch (error) {
        console.log(error);
    }
});

clocks.delete("/:cid", async(req, res) =>{
    const {cid} = req.params;
    try {
        const deletedClock = await deleteClock(cid);
        let truthyData = {success: true, payload: deletedClock};
        let falsyData = {success: false, payload: "Clock not found"};
        if(deletedClock.cid) {
            res.status(200).json(truthyData);
        } else {
            res.status(404).json(falsyData);
        }
    } catch (error) {
        console.log(error);
    }
});

clocks.put("/:cid", async(req, res) => {
    const {cid} = req.params;
    const {body} = req;
    try {
        const updatedClock = await updateClock(cid, body);
        let truthyData = {success: true, payload: updatedClock};
        let falsyData = {success: false, payload: "Clock not found"};
        if(updatedClock.cid) {
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
        if(createdClock.cid) {
            res.status(200).json(truthyData);
        } else {
            res.status(404).json(falsyData);
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = clocks;