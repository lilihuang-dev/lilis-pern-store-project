import { useEffect, useState } from "react";
import axios from "axios";
import Clock from "./Clock.js";

const API = process.env.REACT_APP_API_URL;

const Clocks = () => {
    const [clocks, setClocks] = useState([]);

    useEffect(()=> {
        axios.get(`${API}/clocks`)
            .then(res => setClocks(res.data.payload))
            .catch(err => console.log(err));
    },[]);
    return (
        <div className="all-clocks">
            {clocks.map(clock => {
                return <Clock key={clock.id} clock={clock}/>
            })}
        </div>
    )
}

export default Clocks;