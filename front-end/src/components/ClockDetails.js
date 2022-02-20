import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from "axios";

const ClockDetails = () =>{
    const [clock, setClock] = useState({});
    const {id} = useParams();
    console.log(id)
    const navigate = useNavigate();
    const API = process.env.REACT_APP_API_URL;
    
    useEffect(()=> {
        axios.get(`${API}/clocks/${id}`)
        .then(res => setClock(res.data.payload))
        .catch(err => console.log(err));
    },[id, API])

    return (
        <div className="clock-details">
            <h1>what's wrong with my ID???</h1>
            <h2>{clock.name}</h2>
            <h3>decription</h3>
            <Link to="/clocks"><button>Back</button></Link>
            <Link to={`/clocks/${id}/edit`}><button>Edit</button></Link>
            <button onClick="handleDelete">-----FUNCTION-----Delete</button>
        </div>
    )
}

export default ClockDetails;