import { useEffect, useState } from "react";
// import axios from "axios";
import Clock from "./Clock.js";
import "./clocks.css";

// const API = process.env.REACT_APP_API_URL;

const Clocks = ({clocks,setClocks,searchedClocks}) => {
    const [sortedClocks, setSortedClocks] = useState([]);

    // useEffect(()=> {
    //     axios.get(`${API}/clocks`)
    //         .then(res => setClocks(res.data.payload))
    //         .catch(err => console.log(err));
    // },[]);

    const handleChange =(e)=>{
        let originalClocks1 = [...clocks]
        let originalClocks2 = [...clocks]
        let originalClocks3 = [...clocks]
        let originalClocks4 = [...clocks]
        let lowToHigh = originalClocks1.sort((a,b) => a.price - b.price)
        let highToLow = originalClocks2.sort((a,b) => b.price - a.price)
        let topRate = originalClocks3.sort((a,b) => Number(b.rating) - Number(a.rating))
    
        if(e.target.value === "topRate") {
            setClocks(topRate)
        } else if (e.target.value === "highToLow") {
            setClocks(highToLow)
        } else if (e.target.value === "lowToHigh") {
            setClocks(lowToHigh)
        } 
        else if (e.target.value === "no sorted"){
            setClocks(originalClocks4)
        }
        
    }

    return (
        <div className="clocks-container">
            
            <div className="clocks-sort">
                <span>Sort By:</span>
                
                <select id="clocks-select" onChange={handleChange}>
                    <option value="no sorted"> --- </option>
                    <option value="topRate">Top Rated</option>
                    <option value="highToLow">Price: High To Low</option> 
                    <option value="lowToHigh">Price: Low To High</option> 
                </select> 
            </div>
            <div className="all-clocks">
                {!searchedClocks.length ? clocks.map(clock => {
                    return <Clock key={clock.id} clock={clock} />
                }) : searchedClocks.map(clock => {
                    return <Clock key={clock.id} clock={clock} />
                })}
            </div>
        </div>
        
    )
}

export default Clocks;