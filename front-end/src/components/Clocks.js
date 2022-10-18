import { useEffect, useState } from "react";
import axios from "axios";
import Clock from "./Clock.js";
import "./clocks.css";

const API = process.env.REACT_APP_API_URL;

const Clocks = () => {
    const [clocks, setClocks] = useState([]);

    useEffect(()=> {
        axios.get(`${API}/clocks`)
            .then(res => setClocks(res.data.payload))
            .catch(err => console.log(err));
    },[]);

    const handleChange =()=>{

    }

    return (
        <div className="clocks-container">
            {/* <select id="product">
                <option> --- </option>
                <option value="{clock.color}" onChange={handleChange}>Material</option>
                <option>Color</option>
            </select> */}
            <div className="all-clocks">
                {clocks.map(clock => {
                    return <Clock key={clock.id} clock={clock} />
                })}
            </div>
        </div>
        
    )
}

export default Clocks;