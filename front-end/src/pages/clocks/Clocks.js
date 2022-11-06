import { useEffect, useState } from "react";
// import axios from "axios";
import Clock from "../clock/Clock";
import "./clocks.css";

// const API = process.env.REACT_APP_API_URL;

const Clocks = ({clocks, setClocks, searchedClocks, originalClocks}) => {

    const handleChange =(e)=>{
        let copyClocks = [...clocks];
        
        switch (e.target.value) {
            case "lowToHigh": 
                copyClocks.sort((a,b) => a.price - b.price);
                setClocks(copyClocks);
                break;
            case "highToLow": 
                copyClocks.sort((a,b) => b.price - a.price);
                setClocks(copyClocks);
                break;
            case "topRate": 
                copyClocks.sort((a,b) => Number(b.rating) - Number(a.rating));
                setClocks(copyClocks);
                break;
            default:
                setClocks(originalClocks);
        }
        
    }
    console.log("Clocks: ",clocks)

    return (
        <div className="clocks-container">
            
            <div className="clocks-sort">
                <span>Sort By:</span>
                
                <select id="clocks-select" onChange={handleChange}>
                    <option value="no sorted"> None </option>
                    <option value="topRate">Top Rated</option>
                    <option value="highToLow">Price: High To Low</option> 
                    <option value="lowToHigh">Price: Low To High</option> 
                </select> 
            </div>
            <div className="all-clocks">
                {/* {!searchedClocks.length ? clocks.map(clock => {
                    return <Clock key={clock.cid} clock={clock} />
                }) : searchedClocks.map(clock => {
                    return <Clock key={clock.cid} clock={clock} />
                })} */}

                {clocks.map(clock => {
                    return <Clock key={clock.cid} clock={clock} />
                })}

                {/* {searchedClocks.length !== 0 && searchedClocks.map(clock => {
                    return <Clock key={clock.cid} clock={clock} />
                })} */}
            </div>
        </div>
        
    )
}

export default Clocks;